//Scroll Navigation
$(function(){
    $(window).scroll(function(){
       if($(window).scrollTop() > 50){
           $('nav').addClass("fixed-top").addClass("sticky");
           
           //show dark logo
           //$(".navbar-brand img").attr("src", "img-path-dark");
           
           //Show Back to top button
           $("#back-to-top").fadeIn();
       } else {
           $('nav').removeClass("fixed-top").removeClass("sticky");
           //$(".navbar-brand img").attr("src", "img-path");
           
           //Hide Back to top button
           $("#back-to-top").fadeOut();
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

//Contact Form Validation
$("#name").on("focusout", function(){
   if($(this).val() != ""){
       $(this).css("border", "1px solid green");
       $("#name-error-msg").text("");
   } else {
       $(this).css("border", "1px solid red");
       $("#name-error-msg").text("Name is Required");
   }
});

$("#email").on("focusout", function(){
   if($(this).val() !== ""){
       $(this).css("border", "1px solid green");
       $("#email-error-msg").text("");
   } else{
       $(this).css("border","1px solid red");
       $("#email-error-msg").text("Email Required");
   }
});

$("#phone").on("focusout", function(){
   if($(this).val() != ""){
       $(this).css("border", "1px solid green");
       $("#phone-error-msg").text("");
   } else {
       $(this).css("border", "1px solid red");
       $("#phone-error-msg").text("Phone is Required");
   }
});

//Smooth Scrolling
$(function(){
    $("a.smooth-scroll").click(function(e){
        e.preventDefault();
        
        //get section like #about, #contact etc
        var section_id = $(this).attr("href");
        console.log(section_id);
        $("html", "body").animate({
           scrollTop: $(section_id).offset().top - 64
        }, 1250);
    });
});