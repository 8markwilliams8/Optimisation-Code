var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

//Change H1 Title
if ($('.breadcrumbs__item').length > 3) {
 var h1SubTitle = $('.breadcrumbs__item:nth-child(3)').text();
 $('.categoryHeading').html('<h1 class="hide-on-mobile categoryHeading">'+h1SubTitle+' Offers</h1>');
 }

//SO popular categories dynamic
if ($('.breadcrumbs li').length < 5) {

//Grab and create variables
var categoryFilter = $('.filterGroup__title:contains("Category")').closest('.filterGroup');

var soPopName1 = "Less than £50";
var soPopLink1 = $('.filterGroup__name:contains("Less than £50")').closest('.filterGroup__link a').attr('href');
var soPopName2 = "Less than £100";
var soPopLink2 = $('.filterGroup__name:contains("£50 to £100")').closest('.filterGroup__link a').attr('href');
var soPopName3 = categoryFilter.find('.filterGroup__name:eq(0)').text();
var soPopLink3 = categoryFilter.find('.js-cat-filter-link:eq(0)').attr("href");
var soPopName4 = categoryFilter.find('.filterGroup__name:eq(1)').text();
var soPopLink4 = categoryFilter.find('.js-cat-filter-link:eq(1)').attr("href");
var soPopName5 = categoryFilter.find('.filterGroup__name:eq(2)').text();
var soPopLink5 = categoryFilter.find('.js-cat-filter-link:eq(2)').attr("href");
var soPopName6 = categoryFilter.find('.filterGroup__name:eq(3)').text();
var soPopLink6 = categoryFilter.find('.js-cat-filter-link:eq(3)').attr("href");
var soPopName7 = categoryFilter.find('.filterGroup__name:eq(4)').text();
var soPopLink7 = categoryFilter.find('.js-cat-filter-link:eq(4)').attr("href");


//Insert into the soPopular nav and soMobile nav
$('.soPopular').html("<div class=\"soPopular\"><h3>Popular Categories</h3><a href="+soPopLink1+"><li>"+soPopName1+"</li></a><a href="+soPopLink2+"><li>"+soPopName2+"</li></a><a href="+soPopLink3+"><li>"+soPopName3+"</li></a><a href="+soPopLink4+"><li>"+soPopName4+"</li></a><a href="+soPopLink5+"><li>"+soPopName5+"</li></a><a href="+soPopLink6+"><li>"+soPopName6+"</li></a><a href="+soPopLink7+"><li>"+soPopName7+"</li></a></div>");

$('.soMobile').html("<div class=\"soMobile\"><h3>Popular Categories</h3><div class=\"col-xs-6\"><a href="+soPopLink1+"><li>"+soPopName1+"</li></a><a href="+soPopLink2+"><li>"+soPopName2+"</li></a><a href="+soPopLink3+"><li>"+soPopName3+"</li><a href="+soPopLink7+"><li>"+soPopName7+"</li></a></div><div class=\"col-xs-6\"></a><a href="+soPopLink4+"><li>"+soPopName4+"</li></a><a href="+soPopLink5+"><li>"+soPopName5+"</li></a><a href="+soPopLink6+"><li>"+soPopName6+"</li></a></div></div>");

//Hide nav options to use later
$('.soPopular a:eq(6)').hide();
$('.soMobile a:eq(3)').hide();

}

//Change page title to sub category but if contain offers don't use word in title
else {

  var grabTitle = $('.breadcrumbs__item:nth-child(4)').text();

  if ($('.breadcrumbs__item:nth-child(4):contains("Offers")').length < 1) {
      var h1SubTitle = grabTitle += ' Offers';
  }
  else {
  var grabTitle = $('.breadcrumbs__item:nth-child(4)').text();
    var h1SubTitle = grabTitle;
  }
    $('.categoryHeading').html('<h1 class="hide-on-mobile categoryHeading">'+h1SubTitle+'</h1>');
  }

//Hide ad after first level and only show relevant nav options
if ($('.breadcrumbs li').length > 3) {
$('.so-ad-container').hide();
$('.catIntro__text').css({'height':'200px','min-height':'200px'});
$('.soPopular a:eq(2)').hide();
$('.soPopular a:eq(6)').show();
$('.soMobile a:eq(2)').hide();
$('.soMobile a:eq(3)').show();
}

//Special Offers product card
$('.productCard').each(function(i, obj) {

var newFlag = $(".productCard__offer");
var savings = $(this).find('.productCard__offer').text();
var wasPricing =$(this).find('.wasPrice').text().trim();
var price =$(this).find('.currentPrice').text();

if ( newFlag ) {
$(this).closest('.productCard').prepend('<div class="mw-newFlag"><span class="bigSave">'+savings+'</span><span class="unstrikeWas">was <span class="strikeWas">'+wasPricing+'</span></span><span class="bigPrice">now '+price+'</span></div>');
newFlag.hide();
}

});

//Carousel

//Auto Ctrls

  var interval;
   var timer = function(){
   interval = setInterval(function(){
     if ($(".so-ad-current").next(".so-ad").length === 0) {
         $(".so-ad-current").removeClass("so-ad-current").siblings(":nth-child(1)").addClass("so-ad-current");
     }
     else {
         $(".so-ad-current").removeClass("so-ad-current").next(".so-ad").addClass("so-ad-current");
     }
  },5000);
  };

//On hover pause / reset auto

  $('.so-ad-container').hover(function(ev){
      clearInterval(interval);
  }, function(ev){
      timer();
  });

//Next-Prev Ctrls

    $(".next-mw").click(function() {
      if ($(".so-ad-current").next(".so-ad").length === 0) {
          $(".so-ad-current").removeClass("so-ad-current").siblings(":nth-child(1)").addClass("so-ad-current");
      }
      else {
          $(".so-ad-current").removeClass("so-ad-current").next(".so-ad").addClass("so-ad-current");
      }

  });


    $(".prev-mw").click(function() {
      if ($(".so-ad-current").prev(".so-ad").length === 0) {
          $(".so-ad-current").removeClass("so-ad-current").siblings(":nth-child(3)").addClass("so-ad-current");
      }
      else {
          $(".so-ad-current").removeClass("so-ad-current").prev(".so-ad").addClass("so-ad-current");
      }

  });
     $(".arrow").hover(function () {
      $(this).toggleClass("swing");
   });
  });
