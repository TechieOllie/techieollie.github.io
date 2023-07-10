document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("loaded");
    document.querySelector("footer").classList.remove("hidden");
    document.querySelector("nav").classList.remove("hidden");
    document.querySelector("section").classList.remove("hidden");
    document.querySelector(".navbar").classList.remove("hidden");
  }, 10);
});
