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

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("header__button_open");
});
