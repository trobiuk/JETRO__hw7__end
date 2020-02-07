$(function() {

    $('.slider__main').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        // autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        asNavFor: '.slider__nav'
    });

    $('.slider__nav').slick({
        slidesToShow: 6,
        asNavFor: '.slider__main',
        dots: false,
        arrows: false,
        // variableWidth: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.header__btn-menu').on('click', () => {
        $('.header__btn-menu').toggleClass("change");
        $('.header__menu ul').slideToggle();
    });

});