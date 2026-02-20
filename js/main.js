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
document.addEventListener("DOMContentLoaded", function () {

  const dep1Items = document.querySelectorAll(".dep1");
  const gnbBg = document.querySelector(".gnb_bg");
  const header = document.querySelector(".header_0");

  /* =========================
     1depth (메가메뉴)
  ========================== */

  dep1Items.forEach(item => {

    const link = item.querySelector("a");

    link.addEventListener("click", function (e) {
      e.preventDefault();

      const isOpen = item.classList.contains("active");

      // 전체 닫기
      dep1Items.forEach(i => i.classList.remove("active"));
      gnbBg.classList.remove("active");

      if (!isOpen) {
        item.classList.add("active");
        gnbBg.classList.add("active");
      }
    });

  });

  /* =========================
     배경 클릭 시 닫기
  ========================== */

  gnbBg.addEventListener("click", function () {
    dep1Items.forEach(i => i.classList.remove("active"));
    gnbBg.classList.remove("active");
  });

  /* =========================
     헤더 밖 클릭 시 닫기
  ========================== */

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".header_0")) {
      dep1Items.forEach(i => i.classList.remove("active"));
      gnbBg.classList.remove("active");
    }
  });

  /* =========================
     3depth (dep5 → dep6)
  ========================== */

  const dep5Items = document.querySelectorAll(".dep5");

  dep5Items.forEach(item => {

    const link = item.querySelector("a");

    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // ⭐ dep1 이벤트 차단

      const isOpen = item.classList.contains("active");

      // 아코디언 (하나만 열림)
      dep5Items.forEach(i => i.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    });

  });

});