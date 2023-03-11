import { API_SOCIAL_URL } from "./../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";
import { getPost, commentPost } from "../auth/posts/index.mjs";

/**
 *
 *Listens to the submit event on a comment post form and sends the comment to the API.
 *@async
 *@function
 *@returns {Promise<Object>} A Promise that resolves with the parsed JSON response from the API.
 */
export async function commentPostFormListener() {
  // Select the comment post form
  const form = document.querySelector("#commentPost");
  // Get the ID of the post from the URL
  const url = new URL(location.href);
  const postId = url.searchParams.get("id");

  if (form) {
    // Get the post object from the API
    const post = await getPost(postId);
    // Set the API endpoint for posting a comment
    const action = "/posts";
    const method = "post";
    const commentEndpoint = "/comment";
    const commentPostUrl = `${API_SOCIAL_URL}${action}/${postId}${commentEndpoint}`;

    /**
     * Listen to the form submit event and send the comment data to the API.
     * @async
     * @function
     * @param {Event} event - The submit event object.
     * @returns {Promise<Object>} A Promise that resolves with the parsed JSON response from the API.
     */
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Get the comment data from the form
      const form = event.target;
      const formData = new FormData(form);
      const commentData = Object.fromEntries(formData.entries());

      // Send the comment data to the API and reload the page
      const response = await authFetch(commentPostUrl, {
        method,
        body: JSON.stringify(commentData),
      });
      location.reload();
      return await response.json();
    });
  }
}
