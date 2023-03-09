import * as postFetch from "../api/auth/posts/index.mjs";

const postContainer = document.querySelector("#post-container");
const commentContainer = document.querySelector("#comment-container");

export function commentPostTemplate(postData) {
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
  dateText.innerText = `Updated ${postData.updated.substring(0, 10)}`;

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
  authorName.href = `/profiles/${postData.author.name}?`;

  postContainer.append(clone);

  return clone;
}

function commentTemplate(postData) {
  const commentTemplate = document.querySelector("#template-comment");
  const clone = commentTemplate.content.cloneNode(true);

  const avatarAuthor = clone.querySelector(".avatar-img");
  if (postData.author.avatar) {
    avatarAuthor.src = postData.author.avatar;
  } else {
    avatarAuthor.src =
      "https://images.unsplash.com/photo-1634324173063-909962333bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80";
  }

  const commentAuthor = clone.querySelector("#username");
  commentAuthor.innerText = postData.author.name;

  const commentText = clone.querySelector(".body-text");
  commentText.innerText = postData.body;

  commentContainer.append(clone);

  return clone;
}

async function commentTemplateFetch() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");
  const post = await postFetch.getPost(postId);
  const postComments = post.comments;

  renderCommentPostTemplate(post, postContainer);
  renderCommentTemplate(postComments, commentContainer);
}

commentTemplateFetch();

function renderCommentPostTemplate(postData, parent) {
  parent.innerHTML = "";
  parent.append(commentPostTemplate(postData));
}

function renderCommentTemplate(postData, parent) {
  const commentElements = postData.map(commentTemplate);
  parent.innerHTML += "";
  parent.append(...commentElements);
}
