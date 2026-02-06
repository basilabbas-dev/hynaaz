const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll("#sideMenu a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sideMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

const cards = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

cards.forEach(card => observer.observe(card));
