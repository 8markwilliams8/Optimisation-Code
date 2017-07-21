$('.radio--inline:contains("E-Voucher")').each(function(){
    $(this).html($(this).html().split("E-Voucher").join("<div class=\"packHeadline\">Instant E-Voucher</div> <div class=\"packText\">Straight to your inbox</div>"));
});

var deliveryPrice = $('label:nth-of-type(2) > .deliveryOptions__highlight').text();
var deliveryPriceUse = deliveryPrice.slice(1, -1);

$('.radio--inline:contains("Gift Envelope")').each(function(){
    $(this).html($(this).html().split("Gift Envelope").join("<div class=\"packHeadline\">Gift Envelope</div> <div class=\"packText\">Delivery from" +deliveryPriceUse+ "</div>"));
});

//CSS

$('.packText').css({'font-size':'12px','font-weight':'500'});
$('.packHeadline').css('font-weight','700');

.packText {
    font-size: 12px;
    font-weight: 500;
}
.packHeadline {
    font-weight: 700;
}
