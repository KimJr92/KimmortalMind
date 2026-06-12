// LIGHTBOX OPEN
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

// LIGHTBOX CLOSE
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// MOBILE MENU (simple toggle)
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "60px";
    nav.style.right = "20px";
    nav.style.background = "#111";
    nav.style.padding = "10px";
  }
});

// THEME TOGGLE (dark/light simple)
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});