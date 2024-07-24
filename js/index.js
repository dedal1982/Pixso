//изменение цвета ссылок в хедере
const links = document.querySelectorAll(".header__list a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

//мобильное меню
const headerBurger = document.querySelector(".header__button");
const mobileMenu = document.querySelector(".mobile-menu");
const headerLogo = document.querySelector(".header__logo");

function checkScreenWidth() {
  if (window.innerWidth < 768) {
    if (headerLogo.classList.contains("active")) {
      headerLogo.classList.remove("active");
    } else {
      headerLogo.classList.add("active");
    }
  } else {
    headerLogo.style.display = "block";
  }
}

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("header__button_open");
  mobileMenu.classList.toggle("mobile-menu_open");
  buttonSearchMobile.classList.toggle("active");
  checkScreenWidth();
});

//мобильный поиск header
const buttonSearchMobile = document.querySelector(".header__search_mobile");
const headerSearch = document.querySelector(".header__search");
const buttonSearchClose = document.querySelector(".header__search-close");

buttonSearchMobile.addEventListener("click", () => {
  headerSearch.classList.add("active");
  buttonSearchClose.classList.add("active");
});

buttonSearchClose.addEventListener("click", () => {
  headerSearch.classList.remove("active");
  buttonSearchClose.classList.remove("active");
});
