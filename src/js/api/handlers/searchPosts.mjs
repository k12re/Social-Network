import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth/posts/authFetch.mjs";

const action = "/posts";

const postContainer = document.querySelector("#post-wall");

export async function searchPosts(query) {
  try {
    const updatePostUrl = `${API_SOCIAL_URL}${action}/?_author=true&_comments=true&_reactions=true`;
    const response = await authFetch(updatePostUrl);

    const data = await response.json();

    if (response.ok) {
      const filteredPosts = data.filter((post) => {
        return (
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          ) ||
          post.author.name.toLowerCase().includes(query.toLowerCase())
        );
      });

      const searchResults = document.querySelector("#post-wall");

      searchResults.innerHTML = "";

      filteredPosts.forEach((postData) => {
        const template = document.querySelector("#template-post");
        const clone = template.content.cloneNode(true);

        const postTitle = clone.querySelector(".title-text");
        postTitle.innerText = postData.title;

        if (postData.media) {
          const img = clone.querySelector("img");
          img.src = postData.media;
          img.alt = postData.title;
        }

        const bodyText = clone.querySelector(".body-text");
        bodyText.innerText = postData.body;

        const tagsText = clone.querySelector(".tags-text");
        tagsText.innerText = postData.tags;

        const avatarImg = clone.querySelector("#avatar-img");
        if (postData.author.avatar) {
          avatarImg.src = postData.author.avatar;
        } else {
          avatarImg.src =
            "https://images.unsplash.com/photo-1634324173063-909962333bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80";
        }

        const authorName = clone.querySelector("#username");
        authorName.innerText = postData.author.name;
        authorName.href = `/profile/?name=${postData.author.name}`;

        const commentPost = clone.querySelector(".comment-post");
        commentPost.href = `/post/comment/?id=${postData.id}`;

        const updatePost = clone.querySelector(".update-post");
        updatePost.href = `/post/?id=${postData.id}`;

        const dateText = clone.querySelector(".date-text");
        dateText.innerText = `Updated: ${postData.updated.substring(0, 10)}`;

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

if (path === "/posts/" || path === "/posts/index.html") {
  const searchForm = document.querySelector("#searchForm");
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchQuery = document.querySelector("#searchInput").value.trim();

    searchPosts(searchQuery);
  });
}