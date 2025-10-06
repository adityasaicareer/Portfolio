let lists = document.querySelector(".links");
let icon = document.querySelector(".icons");
let menuOpen = false;

function toggle() {
  menuOpen = !menuOpen;
  lists.style.display = menuOpen ? "flex" : "none";
}

// 🧩 Fix: Reset when screen is wide again
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    lists.style.display = "flex"; // ensure visible on large screen
    menuOpen = false;
  } else if (!menuOpen) {
    lists.style.display = "none"; // keep hidden on small screen
  }
});
