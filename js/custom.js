//Scroll Navigation
$(function(){
    $(window).scroll(function(){
       if($(document).scrollTop() > 450){
           $('nav').addClass("fixed-top").addClass("sticky");
       } else {
           $('nav').removeClass("fixed-top").removeClass("sticky");
       }
    });    
});   
    
//Product Slider
$(function(){
    $("#product-lists").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            768 : {
                items: 3
            }
        }
    });    
});
    

//Wow
$(function(){
    new WOW().init();
});

//After Page Load Animation
$(window).on("load", function(){
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
});