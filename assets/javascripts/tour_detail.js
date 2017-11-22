$(document).ready(function () {
  FloatingMenu();

  function FloatingMenu() {
    var floatingMenu = $('.floating-menu');
    var floatingMenuNavbar = floatingMenu.find('.navbar');
    var menuTop = floatingMenuNavbar.offset().top;
    $(window).scroll(function() {
      if ($(window).width() >= 768) {
        floatingMenuNavbar.css({
          'width': (floatingMenu.width()) + "px"
        });
        if (($(window).scrollTop() + 80) > menuTop) {
          floatingMenuNavbar.addClass('fixed').css({
            top: '0'
          });
        } else {
          floatingMenuNavbar.removeClass('fixed').css({
            top: 'auto',
            width: '100%'
          });
        }
      } else {
        floatingMenuNavbar.removeClass('fixed').css({
          top: 'auto',
          width: '100%'
        });
      }
    });
  }

  $('section#tour-menu .floating-menu .navbar a').click(function() {
    var target;
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        if (this.hash === '#highlight') {
          $('.scroll-up').hide();
        } else {
          $('.scroll-up').show();
        }
        target.find('.animate').delay(1200).addClass('animated');
        setTimeout((function() {
          target.find('.animated').removeClass('animated');
        }), 2000);
        return false;
      }
    }
  });

})
