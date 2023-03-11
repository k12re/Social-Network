import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "./authFetch.mjs";
import { getPost } from "./read.mjs";

const action = "/posts";
const method = "post";
const commentEndpoint = "/comment";

/**
 * Sends a POST request to the API to add a comment to a post.
 *
 * @param {string} postId - The ID of the post to add a comment to.
 * @returns {Promise<object>} - A Promise that resolves with an object containing the comment data.
 * @throws {Error} - If there was an error adding the comment.
 */
export async function commentPost(postId) {
  const commentPostUrl = `${API_SOCIAL_URL}${action}/${postId}${commentEndpoint}`;

  const response = await authFetch(commentPostUrl, {
    method,
    body: JSON.stringify(),
  });

  return await response.json();
}
