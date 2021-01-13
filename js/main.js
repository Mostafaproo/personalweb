$(document).ready(function(){
  'use strict';
  $(document).on('click','.nav-item',function(){
    $(this).addClass('active').siblings().removeClass();
  })

  // Adjust slider height
  var winH = $(window).height(),
      topH = $('.top-header').innerHeight(),
      navH = $('.navbar').innerHeight();
  $('.slider').height( winH - ( topH + navH));


  $('.carousel').carousel({
    interval: 500000
  })



  

});

let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

window.onload=function(){
  document.getElementById("my_audio").play();

}

