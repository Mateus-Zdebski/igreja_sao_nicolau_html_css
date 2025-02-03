document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
      slidesPerView: 1, // Mostra um slide por vez
      spaceBetween: 20, // Espaço entre os slides
      loop: true, // Ativa o loop infinito

      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },

      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },

      autoplay: {
          delay: 7000, // Troca de slide a cada 5 segundos
          disableOnInteraction: false,
      },

      breakpoints: {
          768: {
              slidesPerView: 2, // Em telas maiores, mostra 2 slides por vez
          },
          1024: {
              slidesPerView: 3, // Em telas grandes, mostra 3 slides por vez
          },
      },
  });
});
