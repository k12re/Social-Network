import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";

/**
 * Fetches all posts from the API.
 * @async
 * @function
 * @returns {Promise<object[]>} - An array of post objects.
 */
export async function getPosts() {
  const updatePostUrl = `${API_SOCIAL_URL}${action}/?_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(updatePostUrl);

  return await response.json();
}

/**
 * Fetches a single post by ID from the API.
 * @async
 * @function
 * @param {string} id - The ID of the post to fetch.
 * @returns {Promise<object>} - The post object.
 */
export async function getPost(id) {
  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}/?_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(getPostUrl);

  return await response.json();
}
