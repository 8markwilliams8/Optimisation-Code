//On resize

$(window).resize(function(){
  var win = $(window).width();
  if (win >= 1000) {
    window.defaultToEvoucherDelivery = true;
  }
});
