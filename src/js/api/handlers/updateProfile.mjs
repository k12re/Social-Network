import { getProfile, updateProfile } from "../profile/index.mjs";
import { load } from "../storage/index.mjs";
import { headers } from "../headers.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";

export async function setUpdateProfile() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      updateProfile(profile);
    });
  }
}
