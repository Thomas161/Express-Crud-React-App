var $ = require('jquery');

module.exports = {
  get: function(url) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        dataRype: "json",
        success: success,
        error: error
      });
    });
  },
  post: function(url, data) {
    //post request includes a data object (i.e a payload)
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        type: "POST",
        data: data,
        success: success,
        error: error
      });
     
  },
  patch: function(url, data) {

    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        type: "PATCH",
        data: data,
        success: success,
        error: error
      });
    });
  },
  del: function(url) {
 
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        type: "DELETE",
        success: success,
        error: error
      });
    });
  }
};