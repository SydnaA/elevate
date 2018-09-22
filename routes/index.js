var express = require('express');
var session = require('express-session');
var router = express.Router();

//var getConnection = require('../db');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/', function(req, res, next) {
	res.render('index');
});

module.exports = router;
