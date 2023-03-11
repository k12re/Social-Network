import { getPost, updatePost } from "../auth/posts/index.mjs";

/**
 * Attach a submit event listener to the post update form to update the specified post.
 */
export async function updatePostFormListener() {
  // Get the post update form element
  const form = document.querySelector("#updatePost");

  // Get the ID of the post to update from the URL query parameters
  const url = new URL(location.href);
  const postId = url.searchParams.get("id");

  if (form) {
    // Get the post data to pre-fill the form
    const post = await getPost(postId);

    // Pre-fill the form fields with the post data
    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;
    form.tags.value = post.tags;

    // Attach a submit event listener to the form
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      // Convert the form data to an object
      const post = Object.fromEntries(formData.entries());

      // Add the post ID to the object
      post.id = postId;

      // Update the post with post data
      updatePost(post);
    });
  }
}
