import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const deletePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(deletePostUrl, {
    method,
  });

  if (response.ok) {
    return await response.json();
  }

  alert("You don't have permission to delete this post");
}
