import { profilePosts } from "../api/profile/readProfilePosts.mjs";

const profileContainer = document.querySelector("#profile-post-wall");

export function postTemplate(postData) {
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

  const dateText = clone.querySelector(".date-text");
  dateText.innerText = `Updated: ${postData.updated.substring(0, 10)}`;

  const tagsText = clone.querySelector(".tags-text");
  tagsText.innerText = postData.tags;

  const commentPost = clone.querySelector(".comment-post");
  commentPost.href = `/post/comment/?id=${postData.id}`;

  const updatePost = clone.querySelector(".update-post");
  updatePost.href = `/post/?id=${postData.id}`;

  profileContainer.append(clone);

  return clone;
}

export function renderPostTemplates(postDataList, parent) {
  const postElements = postDataList.map(postTemplate);
  parent.append(...postElements);
}

async function profilePostTemplates() {
  const posts = await profilePosts();
  const container = document.querySelector("#profile-post-wall");
  renderPostTemplates(posts, container);
}

profilePostTemplates();
