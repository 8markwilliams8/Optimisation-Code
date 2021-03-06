var utils = window['optimizely'].get('utils');
utils.waitForElement('body').then(function(){
//////////////////////////////////////////////////////////////////////////////////////////////////
  var navWrap = $('.addSection__formTop'),                                  ///grab top div
        nav = $('.addSection__form'),                                       ///grab CTA
                startPosition = nav.offset().top,                           ///the distance between CTA and the top of window
        stopPosition = $('.js-recentlyviewed').offset().top; ///the distance between stopPoint and the top of window - the height of the CTA
//////////////////////////////////////////////////////////////////////////////////////////////////
    $(document).scroll(function () {                                        ///when the document scrolls
        var y = $(this).scrollTop();                                        ///create variable y for the current distance from top of window

        if (y > startPosition) {                                            ///if current distance from top of window is greater than the distance of the CTA from the top
            nav.addClass('stickBot');                                       ///add the .stickBot class
            if (y > stopPosition) {                                         ///if the current distance from top of window is greater than the stopPoint
                nav.css('bottom', stopPosition - y);                        ///change the CTA css bottom attribute to the distance from top of window to stopPoint - the current distance from the top
            } else {                                                        ///otherwise
                nav.css('bottom', 0);                                       ///change the CTA css bottom attribute to 0
            }
        } else {                                                            ///otherwise
            nav.removeClass('stickBot');                                    ///remove the .stickBot class from the CTA div
        }
    });
//////////////////////////////////////////////////////////////////////////////////////////////////
});
