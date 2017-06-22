$(document).ready(function() {

  if ($(window).width() < 979) {

	}
	else {
	$('.homeHeros').css('display','none');
	}


  var i = 1;
  var j = 1;
  var heroSearchImg = [
    'https://www.virginexperiencedays.co.uk/files/opt-test-shard.jpg',
    'https://www.virginexperiencedays.co.uk/files/opt-test-spa.jpg',
    'https://www.virginexperiencedays.co.uk/files/opt-test-paintball.jpg'

  ];

  var heroSearchText = [
    'try "the shard"',
    'try "spa days"',
    'search for experiences'
  ];

  setInterval(function(){
  var heroSearchImgChange = heroSearchImg[i++ % heroSearchImg.length];
  var heroSearchTextChange = heroSearchText[j++ % heroSearchText.length];

    $(".c-search-hero").css('background-image', 'url(' + heroSearchImgChange + ')');

    $("#search-site").attr("placeholder", heroSearchTextChange);

    }, 6000);

});
