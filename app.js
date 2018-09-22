var express = require('express');
var session = require('express-session');
var path = require('path');

var index = require('./routes/index');


// Create the Express application object
var app = express();

app.set('views', path.join(__dirname, 'pug'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});

app.use('/', index);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
