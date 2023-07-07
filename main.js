$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000, 
        margin : 15,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
  });