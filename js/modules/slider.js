export function slider() {
    new Swiper(".mainSlider", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 80,
        navigation: {
          nextEl: ".mainSlider .next",
          prevEl: ".mainSlider .prev",
        },
    });
    new Swiper(".video-slider", {
      slidesPerView: 1.2,
      spaceBetween: 0,
      freeMode: true,
      breakpoints: {
        769: {
          slidesPerView: 3.5,
          spaceBetween: 0,
          freeMode: true,
        }
      }
    });
}