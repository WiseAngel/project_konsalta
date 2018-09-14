$(function() {
    // Анимация гамбургера
    $('.hamburger-header').on('click', function(event) {
        event.preventDefault();
        $('.hamburger-header').toggleClass('is-active');
        $('.header-nav').toggleClass('header-nav__active');
    });

    var li1 = $('#chance-li-1');
    var li2 = $('#chance-li-2');
    var li3 = $('#chance-li-3');
    var li4 = $('#chance-li-4');
    li1.on('click', function(event) {
        event.preventDefault();
        $('#chance-li-2, #chance-li-3, #chance-li-4').removeClass('chance-li__active');
        li1.addClass('chance-li__active');
        $('#chance-info-block-1').addClass('chance-info_block__active');
        $('#chance-info-block-2, #chance-info-block-3, #chance-info-block-4').removeClass('chance-info_block__active');
    });
    li2.on('click', function(event) {
        event.preventDefault();
        $('#chance-li-1, #chance-li-3, #chance-li-4').removeClass('chance-li__active');
        li2.addClass('chance-li__active');
        $('#chance-info-block-2').addClass('chance-info_block__active');
        $('#chance-info-block-1, #chance-info-block-3, #chance-info-block-4').removeClass('chance-info_block__active');
    });
    li3.on('click', function(event) {
        event.preventDefault();
        $('#chance-li-1, #chance-li-2, #chance-li-4').removeClass('chance-li__active');
        li3.addClass('chance-li__active');
        $('#chance-info-block-3').addClass('chance-info_block__active');
        $('#chance-info-block-1, #chance-info-block-2, #chance-info-block-4').removeClass('chance-info_block__active');
    });
    li4.on('click', function(event) {
        event.preventDefault();
        $('#chance-li-1, #chance-li-2, #chance-li-3').removeClass('chance-li__active');
        li4.addClass('chance-li__active');
        $('#chance-info-block-4').addClass('chance-info_block__active');
        $('#chance-info-block-1, #chance-info-block-2, #chance-info-block-3').removeClass('chance-info_block__active');
    });
    var mixer = mixitup('.publication-info', {
        selectors: {
            target: '.mix',
        },
        load: {
            filter: '.category-news'
        },
        animation: {
            effects: 'scale fade',
            duration: 400,
        },
    });
    $('.faq-tab_item').not(':first').hide();
    $('.faq-wrapper .faq-tab').click(function() {
        $('.faq-wrapper .faq-tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.faq-tab_item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
    
    $('.service-individual-child').not(':first').hide();
    $('.service-individual-li').click(function(event) {
        $('.service-individual-child').hide(400);
        $($(this)).children().show(400);
    });
    //$('.post-entry').hide();
    //  $('.restore-accounting').click(function(event) {
    //    $('.post-entry').toggle(400)
    //});
    $('.feedback-carousel').owlCarousel({
        loop: true,
        dots: true,
        margin: 10,
        responsiveClass: true,
        //autoWidht: true,
        autoHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        //navText: ['<i class='fa fa-angle-left'></i>', '<i class='fa fa-angle-right'></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false
            },
            1200: {
                items: 2,
                nav: false,
                loop: true
            }
        }
    });
    $('.hero-carousel').owlCarousel({
        loop: true,
        dots: true,
        margin: 10,
        responsiveClass: true,
        //autoWidht: true,
        autoHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        //navText: ['<i class='fa fa-angle-left'></i>', '<i class='fa fa-angle-right'></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false
            },
            1200: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    });
    $('.service-popup-link, .publication-popup-link').magnificPopup({});
    // Меню выбора в форме + сортировка по алф
    $('select').selectize({
        create: true,
        sortField: 'text'
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        };
    });
    $('.top').click(function() {
        $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
    });
    $('.slowly').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 600);
    });

    //E-mail Ajax Send
    $('form.callback').submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php', //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger('reset');
            }, 5000);
        });
        return false;
    });

});

$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');

     new WOW().init();
});

