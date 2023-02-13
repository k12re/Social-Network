const form = document.querySelector("#registerForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const registerForm = event.target;

  const formData = new FormData(registerForm);
  const profile = Object.fromEntries(formData.entries());
  console.log(profile);
});
