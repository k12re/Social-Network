import { API_SOCIAL_URL } from "./../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";
import { getPost, commentPost } from "../auth/posts/index.mjs";

export async function commentPostFormListener() {
  const form = document.querySelector("#commentPost");

  const url = new URL(location.href);
  const postId = url.searchParams.get("id");

  if (form) {
    const post = await getPost(postId);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const commentData = Object.fromEntries(formData.entries());

      const action = "/posts";
      const method = "post";
      const commentEndpoint = "/comment";

      const commentPostUrl = `${API_SOCIAL_URL}${action}/${postId}${commentEndpoint}`;

      const response = await authFetch(commentPostUrl, {
        method,
        body: JSON.stringify(commentData),
      });

      return await response.json();
    });
  }
}
