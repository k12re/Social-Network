import { authFetch } from "../auth/posts/authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/profiles";

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

export async function profilePosts() {
  const updatePostUrl = `${API_SOCIAL_URL}${action}/${name}/posts`;

  const response = await authFetch(updatePostUrl);

  return await response.json();
}
