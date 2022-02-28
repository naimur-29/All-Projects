const navbarList = document.querySelector(".navbar__list");
const navbarListContainer = document.querySelector(".navbar__list__container");
const navbarMobileMenu = document.querySelector(".navbar__mobile__menu");

navbarMobileMenu.addEventListener("click", () => {
  navbarMobileMenu.classList.toggle("navbar__mobile__menu__active");
  navbarListContainer.classList.toggle("navbar__list__container__active");
  navbarList.classList.toggle("navbar__list__active");
});
