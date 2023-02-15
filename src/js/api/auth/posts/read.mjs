import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const updatePostUrl = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(updatePostUrl);

  return await response.json();
}

export async function getPost(id) {
  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostUrl);

  return await response.json();
}