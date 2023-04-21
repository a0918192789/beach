const containerEl = document.querySelector(".container");

window.addEventListener("scroll", () => {
  updateImg();
});

function updateImg() {
  containerEl.style.opacity = 1 - window.pageYOffset / 900;
  containerEl.style.backgroundSize = 100 - window.pageYOffset / 7 + "%";
}
updateImg();
