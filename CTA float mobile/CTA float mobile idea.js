

////////////////Idea/////////////////


var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

function checkOffset() {
    if($('.addSection__form').offset().top + $('.addSection__form').height() >= $('.stop-here').offset().top - 10)
        $('.addSection__form').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
        $('.addSection__form').css('position', 'fixed'); // restore when you scroll up
    $('.addSection__form').text($(document).scrollTop() + window.innerHeight);
}
$(document).scroll(function() {
    checkOffset();
});

});



/////////////////////Idea//////////////////////////

var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

$('.checkbox, .btn--checkout, .disclaimer').wrapAll('<div class="formSectionFinish" />');
$('.js-ordersummary-content').addClass("minHeight");
$('.orderSummary__paymentOptions').insertBefore('.formSection:first');
$('.js-order-summary').removeClass("orderSummary--open");

var orderheight = $('.js-ordersummary-content').height();
var browserheight = $(window).height();
var headerheight = ( $('.js-header-top').height() -5 );

if ( orderheight < browserheight ){
  $(window).scroll(function(){
    if ($(this).scrollTop() > headerheight) {
      $('.js-ordersummary-content').addClass('checkoutFixed');
    } else {
      $('.js-ordersummary-content').removeClass('checkoutFixed');
    }
  });
}

});

/////////////////////Idea/////////////////////

var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

$('.addSection__form').wrap('<div class="addSection__formTop"></div>');

  var navWrap = $('.addSection__formTop'),
        nav = $('.addSection__form'),
        startPosition = nav.offset().top,
        stopPosition = $('.stop-here').offset().top - nav.height();

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

///////////Idea////////////

var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

$('.addSection__form').wrap('<div class="addSection__formTop"></div>');

    var window_top = $(this).scrollTop();
    var div_top = $('.addSection__formTop').offset().top;
    var footer_top = $('.stop-here').offset().top;

$(window).scroll(function () {
    if (window_top > div_top) {
        $('.addSection__form').addClass('stickBot');
    } else {
        $('.addSection__form').removeClass('stickBot');
    }

    if (window_top > footer_top) {
        $('.addSection__form').removeClass('stickBot');
    }

});
});

//////////Original/////////////

var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

  var navWrap = $('.addSection__formTop'),
      nav = $('.addSection__form'),
      startPosition = nav.offset().top,
      stopPosition = $('.stop-here').offset().top;

    $(window).scroll(function () {
        var y = $(this).scrollTop();

        if (y > startPosition) {
            nav.addClass('stickBot');
            if (y > stopPosition) {
                nav.css('bottom', stopPosition - y);
            } else {
                nav.css('bottom', 0);
            }
        } else {
            nav.removeClass('stickBot');
        }
    });
});
