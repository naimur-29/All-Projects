const menu = document.querySelector("#mobile__menu");
const menuLinks = document.querySelector(".navbar__menu");

// display mobile menu
menu.addEventListener("click", () => {
  menu.classList.toggle("mobile__menu__active");
  menuLinks.classList.toggle("navbar__menu__active");
});
