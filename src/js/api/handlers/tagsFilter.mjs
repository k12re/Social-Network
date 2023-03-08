import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const updatePostUrl = `${API_SOCIAL_URL}${action}/?_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(updatePostUrl);

  return await response.json();
}

const tagsFilter = document.querySelector("#tags-filter");
// console.log(tagsFilter);

if (tagsFilter) {
  const tagsSearch = tagsFilter.value;
  //   console.log(tagsSearch);

  const filterTagsURL = await getPosts(tags);

  tagsFilter.addEventListener("keyup", async (event) => {
    event.preventDefault();
    const tagQuery = tagsFilter.value;
    console.log(tagQuery);
    const tagQuerySend = `${API_SOCIAL_URL}${action}/?_author=true&_comments=true&_reactions=true&_tag=${tagQuery}`;

    const response = await authFetch(tagQuerySend);

    // return await response.json();

    console.log(response);
    // console.log(tagQuerySend);
  });
}
