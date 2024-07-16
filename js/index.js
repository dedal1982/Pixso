//изменение цвета ссылок в хедере
const links = document.querySelectorAll(".header__list a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
