// navbar

const navbar = document.querySelector(".navbar-index");

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};
