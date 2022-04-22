const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        575: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 5,
        },
    },
});
