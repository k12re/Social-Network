import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "delete";

/**
 * Removes a post with the given ID from the API.
 * @async
 * @function removePost
 * @param {string} id - The ID of the post to be removed.
 * @throws {Error} If `id` is falsy.
 * @returns {Promise<object>} A promise that resolves with the deleted post data if successful.
 */
export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const deletePostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(deletePostUrl, {
    method,
  });

  if (response.ok) {
    alert("Delete is successful");
    return await response.json();
  }
}
