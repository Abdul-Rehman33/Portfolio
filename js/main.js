// ===== Responsive Menu =====

const navMenu = document.getElementById("nav-menu");
const toggleBtn = document.getElementById("menu-toggle");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navMenu.classList.remove("show"); // auto close menu on mobile
  });
});

// ===== Dark/Light Mode =====
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});
