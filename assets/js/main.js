const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    //loop: true,
    spaceBetween: 18,
    slidesPerView: 3,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 12
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      // when window width is >= 640px
      1100: {
        slidesPerView: 3,
        spaceBetween: 18
      }
    }
  });