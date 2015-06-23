$(document).on('ready', function() {

  $('.main-wrapper').on('scroll', function() {

      if($(this).scrollTop() >= ($('header').height() - $('nav').height())) {
        $('nav').addClass('scrolled');
        $('aside').addClass('aside-scrolled');
      } else {
        $('nav').removeClass('scrolled');
        $('aside').removeClass('aside-scrolled');

      }

  });

  $('.fa-navicon').on('click', function () {

    $('.site-wrapper').toggleClass('nav-reveal');

  });

});
