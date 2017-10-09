var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

if ( $('.alert-inline--danger:contains("There are no items in the basket")').length > 0 ) {
//Do not run
}
else {

$('.checkbox, .btn--checkout, .disclaimer').wrapAll('<div class="formSectionFinish" />');
$('.js-ordersummary-content').addClass("minHeight");
$('.orderSummary__paymentOptions').insertBefore('.formSection:first');
$('.js-order-summary').removeClass("orderSummary--open");

var orderheight = ($('.js-ordersummary-content').height() + 20);
var browserheight = $(window).height();
var headerheight = ( $('.js-header-top').height() - 5 );

if ( orderheight < browserheight ){
  $(window).scroll(function(){
    if ($(this).scrollTop() > headerheight) {
      $('.js-ordersummary-content').addClass('checkoutFixed');
    } else {
      $('.js-ordersummary-content').removeClass('checkoutFixed');
    }
  });
}
}

});
