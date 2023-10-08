const controlSize = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");
// fontSize.style.fontSize = "16px-96px";

controlSize.addEventListener("input", sizeText);
function sizeText(event) {
  fontSize.style.fontSize = `${event.target.value}px`;
}
