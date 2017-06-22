$(document).ready(function() {

  $('.homeHeros').css('display','none');

  var i = 1;
  var j = 1;
  var heroSearchImg = [
    'https://s1.postimg.org/vm3x45znj/shard.jpg',
    'https://s1.postimg.org/dxc6cjnwf/spa.jpg',
    'https://s18.postimg.org/ionaddvd5/paintball.jpg'

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
