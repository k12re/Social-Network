import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";
import { renderFilteredPostTemplates } from "../../templates/post.mjs";

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

if (tagsFilter) {
  tagsFilter.addEventListener("submit", async (event) => {
    event.preventDefault();
    const tagQuery = event.target.querySelector("#tag-query").value;

    const posts = await getFilteredPosts(tagQuery);
    postContainer.innerHTML = "";
    renderFilteredPostTemplates(posts, postContainer);
  });
}
