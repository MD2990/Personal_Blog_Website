const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

document.addEventListener("click", function (event) {
  const target = event.target;
  if (!menu.contains(target) && target !== menuToggle && menuToggle.checked) {
    menuToggle.checked = false;
  }
});
