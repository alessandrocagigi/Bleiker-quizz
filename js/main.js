document.addEventListener("DOMContentLoaded", function () {
  var page = document.body.getAttribute("data-page");

  var links = document.querySelectorAll(".nav-links a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
    links[i].removeAttribute("aria-current");
  }

  var target = "";
  if (page === "home") target = "index.html";
  if (page === "profile") target = "grafisk-profil.html";
  if (page === "quiz") target = "quiz.html";
  if (page === "video") target = "video.html";
  if (page === "social") target = "some-annonser.html";

  for (var j = 0; j < links.length; j++) {
    var href = links[j].getAttribute("href");
    if (href === target) {
      links[j].classList.add("active");
      links[j].setAttribute("aria-current", "page");
    }
  }

  var menuToggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".nav-links");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      } else {
        menu.classList.add("open");
        menuToggle.setAttribute("aria-expanded", "true");
      }
    });
  }
});
