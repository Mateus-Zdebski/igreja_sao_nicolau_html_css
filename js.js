$(window).on('load', function() {
    if (typeof $.fn.owlCarousel !== 'function') {
        console.error('Owl Carousel não carregou corretamente.');
        return;
    }

    $('.founders-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: { items: 1, margin: 10 },
            576: { items: 1, margin: 15 },
            768: { items: 2, margin: 20 },
            992: { items: 3, margin: 25 },
            1200: { items: 3, margin: 30 }
        }
    });

    $('.communities-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: { items: 1, margin: 10 },
            576: { items: 1, margin: 15 },
            768: { items: 2, margin: 20 },
            992: { items: 3, margin: 25 },
            1200: { items: 3, margin: 30 }
        }
    });

    $('.padres-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: { items: 1, margin: 10 },
            576: { items: 1, margin: 15 },
            768: { items: 2, margin: 20 },
            992: { items: 3, margin: 25 },
            1200: { items: 3, margin: 30 }
        }
    });

    // Smooth scroll
    $('a[href*="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Navbar efeito scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});
