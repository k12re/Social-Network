import { apiPath } from "../constants.mjs";
import { headers } from "../headers.mjs";
import { save } from "../storage/index.mjs";

export async function loginFormListener() {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch(`${apiPath}/social/auth/login`, {
        method: "POST",
        headers: headers("application/json"),
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const profile = await response.json();
        save("token", profile.accessToken);
        delete profile.accessToken;
        save("profile", profile);

        window.location.href = `/posts/index.html`;

        return profile;
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  });
}
