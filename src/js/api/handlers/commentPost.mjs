import { getPost, commentPost } from "../auth/posts/index.mjs";

export async function commentPostFormListener() {
  const form = document.querySelector("#commentPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const post = await getPost(id);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      console.log(post);

      commentPost(post);
    });
  }
}
