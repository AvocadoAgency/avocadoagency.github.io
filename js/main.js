$(document).ready(function() {

  $('.gallery').fadeIn(500);
  $('.reel2014').hide();

  $('.reels').click(function() {
    if ($('.reel2016').is(':visible')) {
      $('.reels').attr('value', 'CURRENT: Demo Reel 2016');
      $('.reel2016').hide();
      $('.reel2014').fadeIn(250);
    } else {
      $('.reels').attr('value', 'PREVIOUS: Demo Reel 2014');
      $('.reel2014').hide();
      $('.reel2016').fadeIn(250);
    }
  });

  new Clipboard('.emailButton');

  $('.emailButton').click(function() {
    $('.copied').fadeIn(150).delay(500).fadeOut(50);
  })

  $('.gridView').click(function() {
    if ($('.gridViewer').hasClass('traditional')) {
      $('.gridViewer').removeClass('traditional').addClass('doubleGallery');
      $('.gridViewIcon').attr('src','images/ios7-albums.png');
    } else {
      $('.gridViewer').removeClass('doubleGallery').addClass('traditional');
      $('.gridViewIcon').attr('src','images/grid.png');
    }

  })

  $(document).ready(function() {
var stickyNavTop = $('.gridView').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop > stickyNavTop) {
    $('.gridView').addClass('sticky');
} else {
    $('.gridView').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function() {
    stickyNav();
});
});

});

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
