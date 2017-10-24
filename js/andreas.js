$('#nav-menu-container a').click(function () {
  var $href = $(this).attr('href');
  console.log($href)
  $('html,body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});


