$(document).ready(function(){

$('button').click(function(){
  var random = Math.floor((Math.random() * 8) + 1);
  if (random === 1) {
    var result = $("#ebay-result")
  }
  else if (random === 2) {
    var result = $('#email-result')
  }
  else if (random === 3) {
    var result = $('#facebook-result')
  }
  else if (random === 4) {
    var result = $('#sandwich-result')
  }
  else if (random === 5) {
    var result = $('#tea-result')
  }
  else if (random === 6) {
    var result = $('#side-project-result')
  }
  else if (random === 7) {
    var result = $('#eu-result')
  }
  else if (random === 8) {
    var result = $('#umbrella-result')
  };

  $('#icons img').fadeOut(3000);
  $('#animation-area-overlay').css('height', '100vh').fadeTo(1500, 0.8);
  //$('#animation-area-overlay').css({'height': '100vh', 'opacity': '0.9'});
  var $result = result;
  var position = ($(window).width() / 2) - ($(".results-card").width() / 2);
  var tween = TweenLite.to($result, 1.5, {
    delay:2,
    left:position,
    display:'block'
  });


  //result.delay(2000).addClass('active');

});

$('.try-again').click(function(){
  $('#icons img').fadeIn(3000);
  $('#animation-area-overlay').css('height', '0').fadeTo(2000, 0);
  var $resultCard = $('.results-card');
  var tweenBack = TweenLite.to($resultCard, 1, {
    delay:0.1,
    left:"-999px",
    display:'none'
});
  //$('.results-card').css({'left':'-999px', 'display':'none'});
})


})
