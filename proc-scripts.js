$(document).ready(function(){

var $ebay = $('#ebay')

var areaHeight = $('#animation-area').height() - 150;
var areaWidth = ($('#animation-area').width() - $('#icons').width() ) - 50;

var ebayBounce = TweenMax.to($ebay, 3.5, {
  x: areaWidth,
  y: areaHeight,
  ease: Elastic,
  rotation:180,
  repeat: -1,
  yoyo:true
});

var $email = $('#email')

var emailBounce = TweenMax.to($email, 4.5, {
  x: areaWidth / 2,
  y: areaHeight,
  ease: Elastic,
  rotation:270,
  repeat: -1,
  yoyo:true,
  delay:0.5
});

var $eu = $('#eu')

var euBounce = TweenMax.to($eu, 4, {
  x: areaWidth / 3,
  y: areaHeight,
  ease: Elastic,
  rotation:360,
  repeat: -1,
  yoyo:true,
  delay: 1
});

var $facebook = $('#facebook')

var facebookBounce = TweenMax.to($facebook, 3.5, {
  x: 1,
  y: areaHeight,
  ease: Elastic,
  rotation:180,
  repeat: -1,
  yoyo:true,
  delay: 2
});

var $sandwich = $('#sandwich')

var sandwichBounce = TweenMax.to($sandwich, 3, {
  x: 1 - (areaWidth/1.99),
  y: areaHeight,
  ease: Elastic,
  rotation: 240,
  repeat: -1,
  yoyo:true,
  delay: 0
});

var $tea = $('#tea')

var teaBounce = TweenMax.to($tea, 3.5, {
  x: 1 - (areaWidth/2),
  y: areaHeight,
  ease: Elastic,
  rotation: 180,
  repeat: -1,
  yoyo:true,
  delay: 0.5
});

var $sideProject = $('#side-project')

var sideBounce = TweenMax.to($sideProject, 3.5, {
  x: 1 - (areaWidth/3),
  y: areaHeight,
  ease: Elastic,
  rotation: 360,
  repeat: -1,
  yoyo:true,
  delay: 0.5
});



//if ($ebay.position(top) > 100) {
//  var bounceBack = TweenLite.to($ebay, 5, {physics2D: {velocity:200, acceleration: 2, angle:-ballAngle}});
// }

})
