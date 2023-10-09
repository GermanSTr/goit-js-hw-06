const formClient = document.querySelector(".login-form");

formClient.addEventListener("submit", correctForm);

function correctForm(element) {
  element.preventDefault();
  //   const form = element.target;
  const emailForm = element.target.elements.email.value;
  const passwordForm = element.target.elements.password.value;
  if (emailForm === "" || passwordForm === "") {
    alert("WARNING! The Email and Password fields must be filled.");
  } else {
    const result = {};
    result.email = emailForm;
    result.password = passwordForm;
    console.log(result);
  }
  element.target.reset();
}
