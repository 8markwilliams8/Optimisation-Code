//Set eVoucher to default

window.defaultToEvoucherDelivery = true;

//Basket Refresh
function abTestChanges(basket) {
    // exit if we have an empty basket
    if (basket.Items.Count === 0) {
        return;
    }
    // do whatever changes here...

    // Delivery buttons copy
    $('.radio--inline:contains("E-Voucher")').each(function(){
        $(this).html($(this).html().split("E-Voucher").join("<div class=\"packHeadline\">Instant E-Voucher</div> <div class=\"packText\">Straight to your inbox</div>"));
        $(this).addClass('evoucherBtn');
    });

    var deliveryPrice = $('label:nth-of-type(2) > span').text().trim();
    var deliveryPriceUse = deliveryPrice.slice(2, -2);

    $('.radio--inline:contains("Gift Envelope")').each(function(){
        $(this).html($(this).html().split("Gift Envelope").join("<div class=\"packHeadline\">Gift Envelope</div> <div class=\"packText\">Delivery from " +deliveryPriceUse+ "</div>"));
        $(this).addClass('giftBtn');

    });
/*
    //Pre select first delivery option
     if ($('input[name="delivery"]:checked').length) {
     }
     else{
        $('.radio--group:nth-of-type(2) input').attr("checked", "checked");
    //Add price into packaging & delivery field
        $('.basketFooter__row:eq(1) .basketFooter__subPriceRight').text(deliveryPriceUse);
    }
*/
    //Move delivery options under tabs
    var giftArea = $('.row--mobileNoMargin:nth-of-type(2) .basketProduct__block:nth-of-type(2)');
    var deliveryOptions = $(".deliveryOptions");

    deliveryOptions.after(giftArea);
    $('.deliveryOptions__title').addClass('basketProduct__sectionTitle').removeClass('deliveryOptions__title');

}

// hook into 'BasketRendered' event
document.addEventListener("BasketRendered", function(e) {
    abTestChanges(e.detail);

});

// run test changes immediately if basket already rendered
if (typeof app.views.basket.data !== "undefined") {
    abTestChanges(app.views.basket.data);
}
