document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
  
    toggle.addEventListener("click", () => {
      nav.classList.toggle("hidden");
    });
  });
  