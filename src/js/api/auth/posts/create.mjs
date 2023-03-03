import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts/";
const method = "post";

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
