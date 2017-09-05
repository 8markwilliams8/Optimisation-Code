//Special Offers
$('.productCard').each(function(i, obj) {

var newFlag = $(".productCard__offer");
var savings = $(this).find('.productCard__offer').text();
var wasPricing =$(this).find('.wasPrice').text();
var price =$(this).find('.currentPrice').text();

if ( newFlag ) {
$(this).closest('.productCard').prepend('<div class="mw-newFlag"><span class="bigSave">'+savings+'</span> - <span class="strikeWas">was '+wasPricing+'</span>now <span class="bigPrice">'+price+'</span></div>');
newFlag.hide();
$('.productCard__prices').css('display','none');
}

});
