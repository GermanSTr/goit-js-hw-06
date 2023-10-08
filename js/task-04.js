const root = document.querySelector(".counter");

const minusBtn = document.querySelector("button[data-action=decrement]");
const plusBtn = document.querySelector("button[data-action=increment]");
const counterValueElement = document.querySelector("#value");
let counterValue = 0;

function appdatecounterValue() {
  counterValueElement.textContent = counterValue;
}

minusBtn.addEventListener("click", nomberMinus);
function nomberMinus() {
  counterValue -= 1;
  appdatecounterValue();
}

plusBtn.addEventListener("click", nomberPlus);
function nomberPlus() {
  counterValue += 1;
  appdatecounterValue();
}
