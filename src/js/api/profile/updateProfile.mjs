import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}

// import { profile } from "../auth/state.mjs";
// import { apiPath } from "../constants.mjs";
// import { headers } from "../headers.mjs";

// export async function updateProfileImage(avatar) {
//   const me = profile();

//   const response = await fetch(`${apiPath}/social/profiles/${me.name}`, {
//     method: "PUT",
//     body: JSON.stringify({ ...me, avatar }),
//     headers: headers("application/json"),
//   });

//   if (response.ok) {
//     return await response.json();
//   }

//   throw new Error(response.statusText);
// }
