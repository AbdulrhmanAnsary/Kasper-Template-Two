const toggleIcon = document.getElementById("toggle-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");

toggleIcon.addEventListener("click", () => {
  toggleIcon.style.display = "none";
  closeIcon.style.display = "flex";
  menu.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  toggleIcon.style.display = "flex";
  closeIcon.style.display = "none";
  menu.style.display = "none";
});