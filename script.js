// Ejemplo: menú responsive
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-links");
    const toggle = document.createElement("button");
    toggle.textContent = "☰";
    toggle.classList.add("menu-toggle");
    document.querySelector(".navbar").prepend(toggle);
  
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  });
  