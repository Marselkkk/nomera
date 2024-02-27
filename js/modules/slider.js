export function slider() {
    new Swiper(".mainSlider", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 25,
        navigation: {
          nextEl: ".mainSlider .next",
          prevEl: ".mainSlider .prev",
        },
    });
}