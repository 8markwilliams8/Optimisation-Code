//Hide all but 5 reviews
$('.productReviews__review:gt(4)').hide();
//Show these hidden reviews on button click
$('.js-product-reviews-load').click(function(){
$('.productReviews__review').show();
});
