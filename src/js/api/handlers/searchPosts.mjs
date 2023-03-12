import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";

const action = "/posts";
const postContainer = document.querySelector("#post-wall");

/**
 * Searches for posts that match the given query string.
 *
 * @param {string} query The query string to search for.
 * @returns {Promise<void>} A Promise that resolves when the search is complete.
 */
export async function searchPosts(query) {
  try {
    const updatePostUrl = `${API_SOCIAL_URL}${action}/?_author=true&_comments=true&_reactions=true`;
    const response = await authFetch(updatePostUrl);

    const data = await response.json();

    if (response.ok) {
      /**
       * Filter the posts based on the given query string
       * @param {Object} post - A post object from the API response
       * @returns {boolean} Whether the post matches the query string
       */
      const filteredPosts = data.filter((post) => {
        return (
          post.title?.toLowerCase().includes(query.toLowerCase()) ||
          post.body?.toLowerCase().includes(query.toLowerCase()) ||
          post.tags?.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          ) ||
          post.author.name?.toLowerCase().includes(query.toLowerCase())
        );
      });

      const searchResults = document.querySelector("#post-wall");

      // Clear the search results
      searchResults.innerHTML = "";

      // Render each matching post
      filteredPosts.forEach((postData) => {
        const template = document.querySelector("#template-post");
        const clone = template.content.cloneNode(true);

        // Set the post title
        const postTitle = clone.querySelector(".title-text");
        postTitle.innerText = postData.title;

        // Set the post media (if provided)
        if (postData.media) {
          const img = clone.querySelector("img");
          img.src = postData.media;
          img.alt = postData.title;
        }

        // Set the post body
        const bodyText = clone.querySelector(".body-text");
        bodyText.innerText = postData.body;

        // Set the post tags
        const tagsText = clone.querySelector(".tags-text");
        tagsText.innerText = postData.tags;

        // Set the avatar image, or select general image if not provided
        const avatarImg = clone.querySelector("#avatar-img");
        if (postData.author.avatar) {
          avatarImg.src = postData.author.avatar;
        } else {
          avatarImg.src =
            "https://images.unsplash.com/photo-1634324173063-909962333bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80";
        }

        // Set the author name
        const authorName = clone.querySelector("#username");
        authorName.innerText = postData.author.name;
        authorName.href = `/profile/?name=${postData.author.name}`;

        // Set the comment post icon
        const commentPost = clone.querySelector(".comment-post");
        commentPost.href = `/post/comment/?id=${postData.id}`;

        // Set the post date
        const dateText = clone.querySelector(".date-text");
        dateText.innerText = `Updated: ${postData.updated.substring(0, 10)}`;

        // Append the post to the post container
        postContainer.append(clone);
      });
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.error(error);
  }
}

const path = location.pathname;

/**
 *
 * Attach event listener to search form and trigger searchPosts function on submit
 * @function attachSearchFormListener
 */
if (path === "/posts/" || path === "/posts/index.html") {
  const searchForm = document.querySelector("#searchForm");

  // Add submit event listener to the search form
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Find search input element and get its value, trimming any whitespace
    const searchQuery = document.querySelector("#searchInput").value.trim();

    // Call searchPosts function with search query as argument
    searchPosts(searchQuery);
  });
}
