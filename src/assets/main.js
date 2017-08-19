$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/McBand.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    }
  });

});
