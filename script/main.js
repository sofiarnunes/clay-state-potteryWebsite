$(document).ready(function(){

    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2800,
    });

    $('.slider-sea').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1.7,
        slidesToScroll: 1, 
        autoplay: false,
        arrows: true,
    });

    
        $('.slider-new').slick({
            dots: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1, 
            autoplay: false,
            arrows: true,
    });

    $("#login-btn").click(function(e){
        $("#login").show();
    })
    $("#exit").click(function(e){
        $("#login").hide();
    })

    $(".menu-ham").click(function(){
        $(".menu").toggleClass('active')
        $(".menu-ham").toggleClass('toggle')
    });

});
