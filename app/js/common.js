$(document).ready(function () {



    $('.main__slider').slick({
        dots: true,
        fade: true,
        infinite: true
    });

    $('.calendar__slider').slick({
        dots: false,
        infinite: true
    });

    $('.customers__slider').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.news__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.panel_heading .block_title').click(function () {
        $(this).toggleClass('in').next().slideToggle().css('display', 'flex');
        $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
    });

    $('.btn-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        mainClass: 'mfp-zoom-in',
        removalDelay: 500
    });

    $('.btn-mobile-menu').click(function (e) {
        e.preventDefault();
        $('#overlay').fadeIn();
        $('#mobile-menu').animate({
            left: '0px'
        }, 700);
    });

    $('#mobile-menu .close, #overlay').click(function () {
        $('#mobile-menu').animate({
            left: '-150%'
        }, 700);
        $('#overlay').fadeOut();
    });

    $('.about .container').append("<button class='btn-all'>Показать ещё</button>");

    $('.btn-all').click(function () {
       $('.about .text').css({
           maxHeight: 'none',
           overflow: 'visible'
       });
       $(this).hide();
    });

    $('.form-vin').append("<a href='#' class='btn-scan'><img src='img/scan.svg' alt=''></a>");



});

$(window).resize(function () {
    var checkWidth = $(window).width();
    if (checkWidth < 570) {
        $('.btn-all').fadeIn();
    } else {
        $('.btn-all').fadeOut();
    }
    if(checkWidth < 420) {
       $('.btn-scan').fadeIn();
    } else {
        $('.btn-scan').fadeOut();
    }
});

