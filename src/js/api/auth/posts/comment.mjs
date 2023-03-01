import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";
import { getPost } from "./read.mjs";

const action = "/posts";
const method = "post";
const commentEndpoint = "/comment";

export async function commentPost(id) {
  const commentPostUrl = `${API_SOCIAL_URL}${action}/${id}${commentEndpoint}`;

  console.log(id);

  const response = await authFetch(commentPostUrl, {
    method,
    body: JSON.stringify(),
  });

  return await response.json();
}
