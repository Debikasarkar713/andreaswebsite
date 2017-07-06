$('nav a').click(function () {
  var $href = $(this).attr('href');
  console.log($href)
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});


