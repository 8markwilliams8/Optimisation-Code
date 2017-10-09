
//Change to full width
$('.helpBox--locationSearch').closest('section').attr('class','col-md-12');

//Change title
$('.helpBox__title').html('Search <span class="unBold">for</span> experiences <span class="unBold">by</span> location');

//hide current find out more and insert class to target
$('.helpBox--findoutmore').closest('section').addClass('howItWorks').attr('class','col-md-12');
$('.helpBox--findoutmore').hide();
