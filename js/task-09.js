const widGet = document.querySelector(".widget");
const changeColor = widGet.querySelector(".change-color");

changeColor.addEventListener("click", colorElement);

function colorElement() {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
