import { registerUser } from "../auth/register.mjs";

/**
 * Listens to the submit event on a registration form and registers a new user using the form data.
 * @function
 * @param {Event} event - The submit event object.
 * @returns {void}
 */
export function registerFormListener() {
  // Select the registration form
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      // Prevent the form from submitting
      event.preventDefault();

      // Get the user data from the form
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // Register the user using the API function
      registerUser(profile);
    });
  }
}
