import { createPost } from "../auth/posts/index.mjs";

export function createPostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      // event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      console.log(post);

      createPost(post);
    });
  }
}
