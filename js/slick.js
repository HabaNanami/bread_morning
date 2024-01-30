$(function () {
    $('.morning-set .menu-items').slick({
        fade: true,
        infinite: true,
        autoplay: true,
        autoPlaySpeed: 7000,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        dots: true,
        dotsClass: 'menu-lists',
    });
    $('.morning-set .menu-items').on('touchmove', function (event, slick, currentSlide, nextSlide) {
        $('.morning-set .menu-items').slick('slickPlay');
    });

    $('.bread-menu').slick({
        infinite: true,
        autoplay: true,
        autoPlaySpeed: 7000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            }
        },
        ]
    });

    $('.bread-menu .item').on('touchmove', function (event, slick, currentSlide, nextSlide) {
        $('.bread-menu .item').slick('slickPlay');
    });

});