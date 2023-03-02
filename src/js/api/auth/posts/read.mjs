import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const updatePostUrl = `${API_SOCIAL_URL}${action}/?_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(updatePostUrl);

  return await response.json();
}

export async function getPost(id) {
  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}/?_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(getPostUrl);

  return await response.json();
}
