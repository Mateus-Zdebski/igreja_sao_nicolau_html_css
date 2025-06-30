  $(document).ready(function(){
            // Configuração padrão para todos os carrosséis
            var owlConfig = {
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 800,
                responsive: {
                    0: {
                        items: 1,
                        margin: 10
                    },
                    576: {
                        items: 1,
                        margin: 15
                    },
                    768: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 25
                    },
                    1200: {
                        items: 3,
                        margin: 30
                    }
                }
            };
            
            // Inicializar todos os carrosséis
            $('.founders-carousel').owlCarousel(owlConfig);
            $('.communities-carousel').owlCarousel(owlConfig);
            $('.padres-carousel').owlCarousel(owlConfig);
            
            // Smooth scrolling
            $('a[href*="#"]').on('click', function(e) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    e.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                }
            });
            
            // Navbar scroll effect
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('.navbar').addClass('scrolled');
                } else {
                    $('.navbar').removeClass('scrolled');
                }
            });
        });