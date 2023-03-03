import { getPost, updatePost } from "../auth/posts/index.mjs";

export async function updatePostFormListener() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href);
  const postId = url.searchParams.get("id");

  if (form) {
    const post = await getPost(postId);

    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;
    form.tags.value = post.tags;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = postId;

      console.log(post);

      updatePost(post);
    });
  }
}
