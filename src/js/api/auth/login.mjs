import { apiPath } from "../constants.mjs";
import { headers } from "../headers.mjs";
import { save } from "../storage/index.mjs";

/**
 * Attaches an event listener to the login form and handles the form submission.
 * Sends a request to the server to log in the user and saves the user's token and profile in the browser's storage.
 * @async
 * @function loginFormListener
 * @returns {Promise<Object>} A Promise that resolves with the user's profile if the login is successful.
 * @throws {Error} If there is an error in the form submission or in the server response.
 */

export async function loginFormListener() {
  // Get the login form element from the DOM
  const form = document.querySelector("#loginForm");

  // Add an event listener for the form's submit event
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get the user's email and password from the form's input fields
    const email = form.email.value;
    const password = form.password.value;

    try {
      // Send a POST request to the server with the user's email and password
      const response = await fetch(`${apiPath}/social/auth/login`, {
        method: "POST",
        headers: headers("application/json"),
        body: JSON.stringify({ email, password }),
      });

      // If the server response is OK, extract the user's profile and save the token and profile in the browser's storage
      if (response.ok) {
        const profile = await response.json();
        save("token", profile.accessToken);
        delete profile.accessToken;
        save("profile", profile);

        // Redirect the user to the posts page
        window.location.href = `/posts/index.html`;

        return profile;
      } else {
        // If the server response is not OK, display an error message
        alert(data.message);
      }
    } catch (error) {
      // If there is an error in the request or response, log the error to the console
      console.error(error);
      throw new Error("Error logging in.");
    }
  });
}
