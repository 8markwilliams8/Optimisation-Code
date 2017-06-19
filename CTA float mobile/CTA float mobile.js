var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){

  var navWrap = $('.addSection__formTop'),
        nav = $('.addSection__form'),
                startPosition = nav.offset().top,
        stopPosition = $('.js-recentlyviewed').offset().top;

    $(document).scroll(function () {
        var y = $(this).scrollTop();

        if (y > startPosition) {
            nav.addClass('stickBot');
            if (y > stopPosition) {
                nav.css('bottom', stopPosition - y);
            } else {
                nav.css('bottom', 0);
            }
        } else {
            nav.removeClass('stickBot');
        }
    });
});
