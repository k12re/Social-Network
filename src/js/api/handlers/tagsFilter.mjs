import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";
import { renderFilteredPostTemplates } from "../../templates/post.mjs";

/**
 *
 * Retrieves filtered posts from the API based on tag query
 * @async
 * @function getFilteredPosts
 * @param {string} [tagQuery=""] - The tag query to filter the posts by
 * @returns {Promise<Array>} - The filtered posts
 */
export async function getFilteredPosts(tagQuery = "") {
  const urlSearchParams = new URLSearchParams({
    _author: true,
    _comments: true,
    _reactions: true,
    _tag: tagQuery,
  });

  const action = "/posts";
  const updatePostUrl = `${API_SOCIAL_URL}${action}/?${urlSearchParams}`;
  const response = await authFetch(updatePostUrl);

  return await response.json();
}

const tagsFilter = document.querySelector("#tags-filter");
const postContainer = document.querySelector("#post-wall");

/**
 * Attach a submit event listener to the specified form element to filter posts by tag query.
 *
 * @param {HTMLFormElement} tagsFilter - The form element to attach the listener to.
 */
if (tagsFilter) {
  tagsFilter.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get the value of the tag query input field
    const tagQuery = event.target.querySelector("#tag-query").value;

    // Filter the posts based on the tag query
    const posts = await getFilteredPosts(tagQuery);
    postContainer.innerHTML = "";

    // Render the filtered post templates
    renderFilteredPostTemplates(posts, postContainer);
  });
}
