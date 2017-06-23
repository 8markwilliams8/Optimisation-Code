var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

  var navWrap = $('.prodInfoNavTop'),
        nav = $('.prodInfoNav'),
        startPosition = nav.offset().top,
        stopPosition = $('.stop_here').offset().top - nav.height();

    $(document).scroll(function () {
        //stick nav to top of page
        var y = $(this).scrollTop();

        if (y > startPosition) {
            nav.addClass('sticky');
            if (y > stopPosition) {
                nav.css('top', stopPosition - y);
            } else {
                nav.css('top', 0);
            }
        } else {
            nav.removeClass('sticky');
        }
    });


});



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

var utils = window['optimizely'].get('utils');
utils.waitForElement('.sticky').then(function(){
	var getwidth = $('.tabs .collapsibleTab').outerWidth();
  $('.sticky').css('width', getwidth);
});
  
