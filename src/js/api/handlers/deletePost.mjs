import { removePost, getPost } from "../auth/posts/index.mjs";

const deleteButton = document.querySelector("#delete-post");
const path = location.pathname;

/**
 * Listens to the click event on the delete button and removes the post with the given ID.
 * @async
 * @function
 * @returns {Promise<void>}
 */
export async function removePostListener() {
  // Get the ID of the post from the URL
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  // Check if the path is "/post/" and there is an ID
  if (path === "/post/" && id) {
    // Listen to the click event on the delete button and remove the post
    deleteButton.addEventListener("click", () => {
      removePost(id);
    });
  }
}
// Call the removePostListener function to start listening for delete button clicks
removePostListener();
