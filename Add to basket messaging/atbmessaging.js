var utils = window['optimizely'].get('utils');
utils.waitForElement('.usp-slide').then(function(){

//Location messaging
if ($(".locationSection__intro").text().length > 1) {
var locationText = $(".locationSection__intro").html();
$(".locationMessage h3").text("Location");
$(".locationMessage p").html(locationText);
}

//Review messaging
if ($(".productReviews__count").text().length > 1) {
var reviewText = $(".productReviews__count").html();
$(".reviewMessage h3").text("Review");
$(".reviewMessage p").html(reviewText);
}

//Remove 00 from prices
$(".currentPrice").text(function() {
		return $(this).text().replace(/\.00$/,'');
	});
$(".wasPrice").text(function() {
		return $(this).text().replace(/\.00([^\d])/g, '$1');
	});

//Next-Prev Ctrls
//Next Ctrl
  $(".next-mw").click(function() {
    if ($(".usp-current").next(".usp").length === 0) {
        $(".usp-current").removeClass("usp-current").siblings(":nth-child(1)").addClass("usp-current");
    }
    else {
        $(".usp-current").removeClass("usp-current").next(".usp").addClass("usp-current");
    }

});

//Prev Ctrl
  $(".prev-mw").click(function() {
    if ($(".usp-current").prev(".usp").length === 0) {
        $(".usp-current").removeClass("usp-current").siblings(":nth-child(3)").addClass("usp-current");
    }
    else {
        $(".usp-current").removeClass("usp-current").prev(".usp").addClass("usp-current");
    }

});

//Hover wiggle
  $(".arrow").hover(function () {
    $(this).toggleClass("swing");
 });

});
