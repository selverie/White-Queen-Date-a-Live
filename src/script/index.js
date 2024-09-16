const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
