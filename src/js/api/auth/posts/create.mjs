import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts/";
const method = "post";

/**
 * Creates a new post.
 *
 * @async
 * @function createPost
 * @param {Object} postData - The data for the post.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.body - The body text of the post.
 * @param {string} postData.media - The URL of the media associated with the post (optional).
 * @param {string} postData.tags - The tags associated with the post, separated by commas.
 * @returns {Promise<Object>} The response data from the API call.
 * @throws {Error} An error is thrown if the API call fails.
 */
export async function createPost(postData) {
  const createPostUrl = API_SOCIAL_URL + action;

  const response = await authFetch(createPostUrl, {
    method,
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      media: postData.media,
      tags: postData.tags.split(", "),
    }),
  });
  console.log(postData);
  return await response.json();
}
