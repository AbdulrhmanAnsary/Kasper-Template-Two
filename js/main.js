const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.querySelector(".menu");
const xmark = document.querySelector(".xmark");

toggleMenu.addEventListener("click", () => {
  toggleMenu.style.display = "none";
  xmark.style.display = "flex";
  menu.style.display = "flex";
});

xmark.addEventListener("click", () => {
  xmark.style.display = "none";
  toggleMenu.style.display = "flex";
  menu.style.display = "none";
});