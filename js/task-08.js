const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  const formDataEl = {
    email: formEl.email.value,
    password: formEl.password.value,
  };

  if (formDataEl.email === "" || formDataEl.password === "") {
    window.alert(
      "Please fill in all fields and try to login again"
    );
  } else {
    form.reset();
    console.log(formDataEl);
  }
}
