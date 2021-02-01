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

   // buttn to scroll top fucntion
   $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    }
    else {
      $('#topBtn').fadeOut();
    }
  })
  // Animtion for scroll on the top
  $('#topBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800)
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


$('.owl-carousel').owlCarousel({
  items:1,
  merge:true,
  loop:true,
  margin:10,
  video:true,
  lazyLoad:true,
  center:true,
  videoWidth: false, 
  videoHeight: false, 
  responsive:{
      480:{
          items:2
      },
      600:{
          items:4
      }
  }
})
