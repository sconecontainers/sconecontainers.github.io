// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 251
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 10
        }
    })

    $(window).on('load resize', function(){
        if($(window).width() >= 768){
            var  h = $(window).height();
        }else{
            var  h = $(window).height()-50;
        }
      var  w = $(window).width();

      var video = $('.video-background').height();
        if (w/h > 16/9){
            $('.video-foreground').removeClass('more-then-wh');
            $('.video-foreground').addClass('less-then-wh');
        }else{
            $('.video-foreground').removeClass('less-then-wh');
            $('.video-foreground').addClass('more-then-wh');
        }
      if(h<video){
          $('.tell-more').addClass('full-screen-video-button');
          $('.intro-heading').addClass('full-screen-video-text');
      }else {
          $('.tell-more').removeClass('full-screen-video-button');
          $('.intro-heading').removeClass('full-screen-video-text');
      }
    });

})(jQuery); // End of use strict
