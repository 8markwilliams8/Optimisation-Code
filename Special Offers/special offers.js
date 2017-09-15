var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

//Change H1 Title
if ($('.breadcrumbs__item').length > 3) {
 var h1SubTitle = $('.breadcrumbs__item:nth-child(3)').text();
 $('.categoryHeading').html('<h1 class="hide-on-mobile categoryHeading">'+h1SubTitle+' Special Offers</h1>');
 }

//SO popular categories dynamic

//Grab and create variables

var soPopName1 = "Less than £50";
var soPopLink1 = $('.filterGroup__name:contains("Less than £50")').closest('.filterGroup__link a').attr('href');
var soPopName2 = "Less than £100";
var soPopLink2 = $('.filterGroup__name:contains("£50 to £100")').closest('.filterGroup__link a').attr('href');
var soPopName3 = $('.filterGroup__name:visible:eq(1)').text();
var soPopLink3 = $('.filterGroup__link:visible:eq(1) a').attr("href");
var soPopName4 = $('.filterGroup__name:visible:eq(2)').text();
var soPopLink4 =$('.filterGroup__link:visible:eq(2) a').attr("href");
var soPopName5 = $('.filterGroup__name:visible:eq(3)').text();
var soPopLink5 =$('.filterGroup__link:visible:eq(3) a').attr("href");
var soPopName6 = $('.filterGroup__name:visible:eq(4)').text();
var soPopLink6 =$('.filterGroup__link:visible:eq(4) a').attr("href");

//Insert into the SO popular nav

$('.soPopular').html("<div class=\"soPopular\"><h3>Popular Categories</h3><a href="+soPopLink1+"><li>"+soPopName1+"</li></a><a href="+soPopLink2+"><li>"+soPopName2+"</li></a><a href="+soPopLink3+"><li>"+soPopName3+"</li></a><a href="+soPopLink4+"><li>"+soPopName4+"</li></a><a href="+soPopLink5+"><li>"+soPopName5+"</li></a><a href="+soPopLink6+"><li>"+soPopName6+"</li></a></div>");

$('.soMobile').html("<div class=\"soMobile\"><h3>Popular Categories</h3><div class=\"col-xs-6\"><a href="+soPopLink1+"><li>"+soPopName1+"</li></a><a href="+soPopLink2+"><li>"+soPopName2+"</li></a><a href="+soPopLink3+"><li>"+soPopName3+"</li></div><div class=\"col-xs-6\"></a><a href="+soPopLink4+"><li>"+soPopName4+"</li></a><a href="+soPopLink5+"><li>"+soPopName5+"</li></a><a href="+soPopLink6+"><li>"+soPopName6+"</li></a></div></div>");



//Special Offers
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
      timer()
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
