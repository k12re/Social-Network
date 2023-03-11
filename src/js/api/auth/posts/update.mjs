import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "put";

/**
 * Update a post
 *
 * @async
 * @function updatePost
 * @param {Object} postData - The data of the post to update.
 * @param {string} postData.id - The ID of the post to update.
 * @param {string} postData.title - The updated title of the post.
 * @param {string} postData.body - The updated body of the post.
 * @param {string} postData.media - The updated media of the post.
 * @param {string} postData.tags - The updated tags of the post, separated by commas.
 * @throws {Error} If postData.id is falsy.
 * @returns {Promise<Object>} The updated post data.
 */
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostUrl = `${API_SOCIAL_URL}${action}/${postData.id}`;

  console.log(postData);

  const response = await authFetch(updatePostUrl, {
    method,
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      media: postData.media,
      tags: postData.tags.split(", "),
    }),
  });
  location.reload();
  return await response.json();
}
