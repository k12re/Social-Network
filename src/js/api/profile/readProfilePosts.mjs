import { authFetch } from "../auth/posts/authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/profiles";

/**

Fetches a list of posts for the user profile with the given name from the API server.
@async
@function
@throws {Error} If the HTTP response status is not okay.
@returns {Promise<Object[]>} An array of JSON objects representing user posts.
*/

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

export async function profilePosts() {
  const updatePostUrl = `${API_SOCIAL_URL}${action}/${name}/posts`;

  const response = await authFetch(updatePostUrl);

  return await response.json();
}
