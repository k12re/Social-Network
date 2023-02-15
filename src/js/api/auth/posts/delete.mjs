import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  const deletePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(deletePostUrl, {
    method,
  });

  return await response.json();
}
