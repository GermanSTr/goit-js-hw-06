const widGet = document.querySelector(".widget");
const changeColor = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColor.addEventListener("click", colorElement);

function colorElement() {
  const result = getRandomHexColor();
  const colorBody = widGet.parentNode;
  colorBody.style.backgroundColor = result;
  colorName.textContent = result;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
