import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  const updatePostUrl = `${API_SOCIAL_URL}${action}/${postData.id}`;

  console.log(postData);

  const response = await authFetch(updatePostUrl, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
