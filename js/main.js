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

});
