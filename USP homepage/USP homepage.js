$( document ).ready(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 980px)");

    if (isMobile.matches) {
var i = 1;
var messages = [
  "<a class=\"usp__link usp-free\" target=\"_blank\" href=\"https:\/\/www.virginexperiencedays.co.uk/myvoucher\"></a><div class=\"usp__textWrap\"><h3 class=\"usp__text balance-text\">free exchanges</h3><p class=\"usp-para\">swap to the experience you want hassle free</p>",
  "<a class=\"usp__link usp-exp\" href=\"https:\/\/www.virginexperiencedays.co.uk/search/\"></a><div class=\"usp__textWrap\"><h3 class=\"usp__text balance-text\">over 2,000 experiences</h3><p class=\"usp-para\">huge experience range to suit everyone</p>",
  "<a class=\"usp__link usp-inst\" href=\"https:\/\/www.virginexperiencedays.co.uk/e-vouchers\"></a><div class=\"usp__textWrap\"><h3 class=\"usp__text balance-text\">instant delivery</h3><p class=\"usp-para\">perfect if you're treating yourself</p>"
];

setInterval(function(){
var randommessage = messages[i++ % messages.length];

  $(".usp-mobile").html(randommessage);

  }, 4000);
    }
 });

 ///Up-to-date

 $( document ).ready(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 980px)");

    if (isMobile.matches) {
var i = 1;
var messages = [
  "<a class=\"usp__link usp-exp\" href=\"https:\/\/www.virginexperiencedays.co.uk/search/\"></a><div class=\"usp__textWrap\"><h3 class=\"usp__text balance-text\">over 2,000 experiences</h3><p class=\"usp-para\">huge range to suit everyone</p>",
  "<a class=\"usp__link usp-free\" target=\"_blank\" href=\"https:\/\/www.virginexperiencedays.co.uk/myvoucher\"></a><div class=\"usp__textWrap\"><h3 class=\"usp__text balance-text\">free exchanges</h3><p class=\"usp-para\">no hassle</p>",
  "<a class=\"usp__link usp-inst\" href=\"https:\/\/www.virginexperiencedays.co.uk/e-vouchers\"></a><div class=\"usp__textWrap\"><h3 class=\"usp__text balance-text\">instant delivery</h3><p class=\"usp-para\">perfect if you're treating yourself</p>"
];

setInterval(function(){
var randommessage = messages[i++ % messages.length];

  $(".usp-mobile").html(randommessage);

  }, 4000);
    }
 });
