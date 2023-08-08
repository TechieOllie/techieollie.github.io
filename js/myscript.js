document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("loaded");
    document.querySelector("footer").classList.remove("hidden");
    document.querySelector("nav").classList.remove("hidden");
    document.querySelector("section").classList.remove("hidden");
    document.querySelector(".navbar").classList.remove("hidden");
  }, 10);
});

const hamburger = document.querySelector(".nav-mobile");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navBar.classList.remove("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBar.classList.remove("active");
  })
);

/*window.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navBar.classList.remove("active");
});*/
