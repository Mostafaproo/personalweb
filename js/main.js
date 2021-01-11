$(document).ready(function(){
  'use strict';

  // Adjust slider height
  var winH = $(window).height(),
      topH = $('.top-header').innerHeight(),
      navH = $('.navbar').innerHeight();
  $('.slider').height( winH - ( topH + navH));


  $('.carousel').carousel({
    interval: 5000
  })
  

});

