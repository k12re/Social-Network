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

// export async function updateProfileMedia() {
//   try {
//     const response = await authFetch(
//       `${API_SOCIAL_URL}/profiles/${data.name}/media`,
//       {
//         method: "GET",
//         headers: headers("application/json"),
//       }
//     );

//     const data = await response.json();

//     if (response.ok) {
//       const profileName = document.querySelector("#profileName");
//       const profileAvatar = document.querySelector("#profileAvatar");
//       const profileBanner = document.querySelector("#profileBanner");

//       profileName.textContent = data.name;
//       profileAvatar.src = data.author.avatar;
//       profileBanner.src = data.author.banner;

//       return await response.json();
//     } else {
//       console.log(data);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
