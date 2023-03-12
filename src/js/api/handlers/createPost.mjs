import { createPost } from "../auth/posts/index.mjs";

/**
 * Listens to the submit event on a post creation form and creates a new post using the form data.
 * @function
 * @param {Event} event - The submit event object.
 * @returns {void}
 */
export function createPostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      // Get the post data from the form
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // Create the post using the API function
      createPost(post);
    });
  }
}
