(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('body').addClass('offcanvas-opened');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('body').removeClass('offcanvas-opened');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('body').removeClass('offcanvas-opened');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('body').removeClass('offcanvas-opened');
      $('.offcanvas-overlay').removeClass('active');
    }
  });

  // sticky
  var wind = $(window);
  var sticky = $('#sticky-header');
  wind.on('scroll', function() {
      var scroll = wind.scrollTop();
      if (scroll < 5) {
          sticky.removeClass('sticky');
      } else {
          sticky.addClass('sticky');
      }
  });
  $(window).on('load resize',function(){
    $('.header-section').height($('.header-in').outerHeight());
    $('body').css('--header-height',$('.header-in').outerHeight() + 'px');
  });


  // project-slider
  $('.project-slider-active').owlCarousel({
    loop:true,
    margin:70,
    responsiveClass:true,
    nav:true,
    dots:true,
    navText: ['<iconify-icon class="icon" icon="ri:arrow-left-s-line"></iconify-icon>','<iconify-icon class="icon" icon="ri:arrow-right-s-line"></iconify-icon>'],
    responsive:{
        0:{
            items:1,
            nav: true
        },
        600:{
            items:1,
            nav:true
        },
        991:{
            items:2,
            nav:true,
        }
    }
  });


  // testimonial-slider
  $('.testimonial-slider-active').owlCarousel({
    loop:false,
    margin:70,
    responsiveClass:true,
    nav:true,
    dots:false,
    navText: ['<iconify-icon class="icon" icon="ri:arrow-left-s-line"></iconify-icon>','<iconify-icon class="icon" icon="ri:arrow-right-s-line"></iconify-icon>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        767:{
            items:1,
            nav:true,
        }
    }
  });


})(jQuery);




$(document).ready(function(){

  // page-theme 
  $('.page-theme-button').click(function(){
    $('body').toggleClass('page-dark');
  })


  // one-page-nav
  $('.mobile-menu').onePageNav({
    currentClass: 'active',
    scrollOffset: 0,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
  });



  //aos init
  AOS.init();

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})











