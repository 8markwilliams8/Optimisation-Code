var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

if ($('.js-cookie-notice').is(':visible')){
  $('.js-cookie-notice').hide();
}

if ($('.js-product-apple-pay-button').is(':visible')){
$('.apple-pay-button-with-text--productPage').wrap('<div class=\"applePayWrap\"></div>');
$('.apple-pay-button-with-text--productPage').css('margin-top','0');
var nav = $('.applePayWrap'),
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
}
else {
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
}
});
