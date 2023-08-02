$(document).ready(function () {

    if ($('.banner').length)
    $('.banner').slick({
        // dots: true,
        arrows: false,
        // slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000
    })
if ($(".text-slider").length == 1) {

    var typed_strings =
        $(".text-slider-items").text();

    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(", "),
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}
$('h2').mouseenter(function(){
    $('p').toggle(1000)
});




});



// if($('#form-validate').length){
//     jQuery('#form-validate').validate({
//     rules:{
//         fname : "required",
//         email :{
//             required: true,
//             email: true
//         },
    
//         number:{
//             required: true,
    
//         },
//     },
    
//     messages:{
//         fname : "Please enter your name",
//         email: "Please enter Valid Email Id",
//         number :{
//             required: "please enter a valid number",
           
//         }
//     }
// })
    
    
    
    
    
    
    
  

