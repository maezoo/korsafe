var visSlide = new Swiper(".vis-slide", {

    effect: "fade",
    fadeEffect: {
        crossFade: true
    },

    loop: true,

    autoplay: {
        // delay: 2000,원본
        delay: 2000,
        disableOnInteraction: false
    }

});
// var topSlide = new Swiper(".top-slide", {
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
//     slidesPerView: 1,
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     loop: true,
//     autoplay: {
//         delay: 2700,
//         disableOnInteraction: false
//     }
// });