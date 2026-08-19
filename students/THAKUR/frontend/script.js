const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const progressBar = document.getElementById("progressBar");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = `${(scrollTop / height) * 100}%`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
