"use strict";

var i = 0;
$('.bar').click(function () {
  var x = $('.ul-container').toggle();
});
$('a[href^="#"]').click(function () {
  var archon = $(this).attr("href");
  console.log(archon);
  $("html,body").animate({
    scrollTop: $(archon).offset().top
  }, 800 //speed
  );
});
$("form").submit(function (e) {
  e.preventDefault();
});
$('.project-wrapper').mouseenter(function () {
  console.log('na obiekcie');
  $(this).find('img').css("opacity", "0.3");
  $(this).find('.project-info').css('display', 'block');
}).mouseleave(function () {
  $(this).find('img').css("opacity", "1");
  $(this).find('.project-info').css('display', 'none');
  console.log("zdjales");
});