$(document).ready(function () {
  function searchSchool(var searchTarget) {
    $.ajax({
      type: 'get',
      cashe: false,
      url: "http://map.toronto.ca/geoservices/rest/search/rankedsearch?searchString="+searchTarget+"&searchArea=*&matchType=1&projectionType=2&retRowLimit=50",
      success: function(data) {
        console.log(data);
      }
    });
  }
});
