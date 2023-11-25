const flipInner = document.getElementById("flip-box-inne");
const body = document.querySelectorAll("body")[0]

function flipAnimation() {
  flipInner.classList.toggle("flip-animation");
  body.classList.toggle("bg-animation");
}