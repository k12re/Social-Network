// import { profile } from "../auth/state.mjs";
// import { API_SOCIAL_URL } from "../constants.mjs";
// import { headers } from "../headers.mjs";
// import { authFetch } from "../auth/posts/authFetch.mjs";

// const action = "/profiles";
// const method = "put";

// export async function updateProfileMedias(data) {
//   if (!data.name) {
//     throw new Error("Update requires a name");
//   }

//   const updateProfileURL = `${API_SOCIAL_URL}${action}/${data.author.name}/media`;

//   const response = await authFetch(updateProfileURL, {
//     method: "put",
//     headers: headers("application/json"),
//     body: JSON.stringify(data),
//   });

//   console.log(updateProfileURL);

//   return await response.json();
// }
