$('.nav a').click(function () {
  var $href = $(this).attr('data-target');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});


