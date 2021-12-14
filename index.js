const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav__lista");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})