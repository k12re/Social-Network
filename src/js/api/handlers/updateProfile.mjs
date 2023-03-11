import { getProfile, updateProfile } from "../profile/index.mjs";
import { load } from "../storage/index.mjs";
import { headers } from "../headers.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";

/**
 * Attach a submit event listener to the user profile update form to update the user's profile.
 */
export async function setUpdateProfile() {
  // Get the user profile update form element
  const form = document.querySelector("#editProfile");

  if (form) {
    // Load the user's profile data and pre-fill the form fields
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;

    // Disable the form submit button while the profile data is being fetched
    const button = form.querySelector("button");
    button.disabled = true;

    // Get the user's full profile data and pre-fill the form fields for the banner and avatar
    const profile = await getProfile(name);

    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    // Re-enable the form submit button
    button.disabled = false;

    // Attach a submit event listener to the form
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      // Convert the form data to an object
      const profile = Object.fromEntries(formData.entries());

      // Add the user's name and email to the profile object
      profile.name = name;
      profile.email = email;

      // Update the user's profile
      updateProfile(profile);
    });
  }
}
