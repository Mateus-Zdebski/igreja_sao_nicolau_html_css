$(document).ready(function() {
    // Mostra o loader
 
    
    // Esconde o loader quando tudo estiver carregado
    $(window).on('load', function() {
        $('.loading').fadeOut('slow', function() {
            $(this).remove();
        });
        
        initCarousels();
        initNavbar();
        initSmoothScroll();
    });
    
    function initCarousels() {
        $('.founders-carousel, .communities-carousel, .padres-carousel').each(function() {
            var $carousel = $(this);
            
            // Destroi se já foi inicializado
            if ($carousel.hasClass('owl-loaded')) {
                $carousel.trigger('destroy.owl.carousel');
                $carousel.removeClass('owl-loaded owl-hidden');
                $carousel.find('.owl-stage-outer').children().unwrap();
            }
            
            // Inicializa o carrossel
            $carousel.owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                responsive: {
                    0: { items: 1, margin: 10 },
                    576: { items: 1, margin: 15 },
                    768: { items: 2, margin: 20 },
                    992: { items: 3, margin: 25 },
                    1200: { items: 3, margin: 30 }
                },
                onInitialized: function() {
                    // Força redimensionamento após inicialização
                    setTimeout(function() {
                        $carousel.trigger('refresh.owl.carousel');
                    }, 100);
                }
            });
        });
    }
    
    function initNavbar() {
        // Navbar scroll effect
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });
        
        // Trigger inicial
        $(window).trigger('scroll');
    }
    
    function initSmoothScroll() {
        // Smooth scrolling para links âncora
        $('a[href*="#"]').on('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                var hash = this.hash;
                
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 70
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
    }
    
    // Redimensiona os carrosséis quando a janela é redimensionada
    $(window).on('resize', function() {
        $('.owl-carousel').each(function() {
            $(this).trigger('refresh.owl.carousel');
        });
    });
});