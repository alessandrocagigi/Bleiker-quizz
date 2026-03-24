const pageMap = {
  home: "index.html",
  profile: "grafisk-profil.html",
  quiz: "quiz.html",
  video: "video.html",
  social: "some-annonser.html",
};

const bodyPage = document.body.dataset.page;
const navLinks = document.querySelectorAll(".nav-links a");

if (bodyPage && pageMap[bodyPage]) {
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === pageMap[bodyPage]) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
