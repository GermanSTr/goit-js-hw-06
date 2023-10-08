const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", validText);

function validText(event) {
  if (event.target.value.length === 6) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
}
