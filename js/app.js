let i = 0;
$('.bar').click(function () {

  var x = $('.ul-container').toggle();

})


$('a[href^="#"]').click(function () {
  var archon = $(this).attr("href");
  console.log(archon);
  $("html,body").animate({
      scrollTop: $(archon).offset().top
    },
    800 //speed
  );
})
$("form").submit(function(e) {
    e.preventDefault();
});
$('form').validate();