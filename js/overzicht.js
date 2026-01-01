const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburger-close");
const sidebar = document.getElementById("sidebar");
const body = document.body;

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  if (sidebar.classList.contains("show")) {
    body.classList.add("sidebar-open");
  } else {
    body.classList.remove("sidebar-open");
  }
});

hamburgerClose.addEventListener("click", () => {
  sidebar.classList.remove("show");
  body.classList.remove("sidebar-open");
});
