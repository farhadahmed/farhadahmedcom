$(function() {

  //Not yet working

  $('.page-links').mouseenter(function() {
      $(this).animate({
          height: '+=10px'
      });
  });
  $('.page-links').mouseleave(function() {
      $(this).animate({
          height: '-=10px'
      });
  });

  $('.projects-section').mouseenter(function() {
      $(this).animate({
          height: '+=10px'
      });
  });
  $('.projects-section').mouseleave(function() {
      $(this).animate({
          height: '-=10px'
      });
  });

});
