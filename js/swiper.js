const swiper = new Swiper(".promo__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".promo__pagination",
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
