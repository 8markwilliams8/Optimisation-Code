//Exclusive products

$(document).ready(function(){

var exclusive = $(".flag--important:contains('Exclusive')");

if ( exclusive ) {
exclusive.closest('.productCard').prepend('<div class="mw-exclusive">Exclusive</div>');
exclusive.hide();
} // hide current exclusive tags and insert new div above product card

});

//New products

$(document).ready(function(){

var newFlag = $(".flag--disc:contains('New')");

if ( newFlag ) {
newFlag.closest('.productCard').prepend('<div class="mw-newFlag">New Experience</div>');
newFlag.hide();
} // hide current exclusive tags and insert new div above product card

});
