var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

var nav = $('.addSection__form'),
    startPosition = nav.offset().top ,
  	stopPosition = $('.stop-here').offset().top,
    windowHeight = $( window ).height(),
  	stopPosition2 = stopPosition - windowHeight;

$(document).scroll(function(){

  var scrollPosition = $(window).scrollTop();

  if (scrollPosition){

    nav.addClass('stickBot');

    if (scrollPosition > stopPosition2) {
        nav.css('bottom', stopPosition2 - scrollPosition);
    } else {
        nav.css('bottom', 0);
    }
  }
  else {
    nav.removeClass('stickBot');
  }
});

});

$('.js-collapsible-content:not(:first)').css('display','none');
