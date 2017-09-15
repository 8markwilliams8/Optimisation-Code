//Collapse discount code

function abTestChanges(basket) {
    // exit if we have an empty basket
    if (basket.Items.Count === 0) {
        return;
    }
    // do whatever changes here...

  $('.js-basket-discount').removeClass('discountCode--show');

}
// hook into 'BasketRendered' event
$(document).on("BasketRendered", function(e) {
    abTestChanges(e.basketData);
});

// run test changes immediately if basket already rendered
if (typeof app.views.basket.data !== "undefined") {
    abTestChanges(app.views.basket.data);
}
