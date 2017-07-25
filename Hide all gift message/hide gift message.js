var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){
  $('.basketProduct__giftMessage').text('Add a free gift message');
});
