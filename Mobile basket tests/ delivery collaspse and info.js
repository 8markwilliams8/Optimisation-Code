if ($("input[type=radio]").val("E").is(":checked")){
$('.deliveryOptions').hide();
}

function abTestChanges(basket) {
    // exit if we have an empty basket
    if (basket.Items.Count === 0) {
        return;
    }
    // do whatever changes here...
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

    //CSS

    $('.packText').css({'font-size':'12px','font-weight':'500'});
    $('.packHeadline').css('font-weight','700');
}

// hook into 'BasketRendered' event
$(document).on("BasketRendered", function(e) {
    abTestChanges(e.basketData);
});

// run test changes immediately if basket already rendered
if (typeof app.views.basket.data !== "undefined") {
    abTestChanges(app.views.basket.data);
}
