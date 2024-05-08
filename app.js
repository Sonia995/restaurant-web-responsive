// Nav

function menuToggle() {
  var toggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu-nav");
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
  toggle.setAttribute("aria-label", "Cerrar");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Footer

var fecha = new Date();
document.querySelector("#copy").innerHTML = fecha.getFullYear();
