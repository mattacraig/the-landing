$(document).on('ready', function() {

  $(window).on('scroll', function() {

      if($(this).scrollTop() >= ($('header').height() - $('nav').height())) {
        $('nav').addClass('scrolled');
      } else {
        $('nav').removeClass('scrolled');
      }

  });

  $('.fa-navicon').on('click', function () {

    $('.main-wrapper').toggleClass('nav-reveal');

  });

});
