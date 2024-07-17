const swiper = new Swiper(".promo__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".promo__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".promo__next",
    prevEl: ".promo__prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
