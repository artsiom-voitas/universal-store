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
})

// console.log(document);
// var
// let - хотим менять значения
// const - не меняем значения

const nav = document.getElementById('nav');
const navClose = document.getElementById('nav-close');
const navOpen = document.getElementById('nav-open');

// console.log(nav)

window.ontouchstart = function(event) {
    if(event.target == navOpen) {
        nav.classList.add('active');
    }
    if(event.target == navClose) {
        nav.classList.remove('active');
    }
}


