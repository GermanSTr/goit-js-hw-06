const nameInput = document.querySelector("#name-input");
const nameClient = document.querySelector("#name-output");

nameInput.addEventListener("input", wordClient);
function wordClient(event) {
  if (event.target.value.length > 0) {
    nameClient.textContent = event.target.value;
  } else {
    nameClient.textContent = "Anonymous";
  }
}
