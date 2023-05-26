document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("loaded");
    document.querySelector("footer").classList.remove("hidden");
  }, 10);
});
