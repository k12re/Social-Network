import * as postFetch from "../api/auth/posts/index.mjs";

const postContainer = document.querySelector("#post-container");
const commentContainer = document.querySelector("#comment-container");

export function commentPostTemplate(postData) {
  const template = document.querySelector("#template-post");
  const clone = template.content.cloneNode(true);

  const postTitle = clone.querySelector(".title-text");
  postTitle.innerText = postData.title;

  const img = clone.querySelector("img");
  img.src = postData.media;

  const bodyText = clone.querySelector(".body-text");
  bodyText.innerText = postData.body;

  const dateText = clone.querySelector(".date-text");
  dateText.innerText = `Updated ${postData.updated.substring(0, 10)}`;

  const tagsText = clone.querySelector(".tags-text");
  tagsText.innerText = postData.tags;

  const avatarImg = clone.querySelector("#avatar-img");
  avatarImg.src = postData.author.avatar;

  const authorName = clone.querySelector("#username");
  authorName.innerText = postData.author.name;
  authorName.href = `/profiles/${postData.author.name}?`;

  postContainer.append(clone);

  //   return post;
}

function commentTemplate(postData) {
  const commentTemplate = document.querySelector("#template-comment");
  const clone = commentTemplate.content.cloneNode(true);

  const avatarAuthor = clone.querySelector("#avatar-img");
  avatarAuthor.src = postData.author.avatar;

  const commentAuthor = clone.querySelector("#username");
  commentAuthor.innerText = postData.author.name;

  const commentText = clone.querySelector(".body-text");
  commentText.innerText = postData.body;

  commentContainer.append(clone);
}

async function commentTemplateFetch() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");
  const post = await postFetch.getPost(postId);
  const postComments = post.comments;

  //   console.log(post);
  //   console.log(postComments);

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

// renderCommentPostTemplate();
// renderCommentTemplate();

// ------------------UNUSED

// async function postTemplateFetch() {
//   const url = new URLSearchParams(window.location.search);
//   postId = urlParams.get("id");
//   const posts = await postFetch.getPost(id);
//   const post = posts.id;
//   //   const comment = posts.pop().comments;
//   console.log(post.comments);
//   console.log(posts);
//   console.log(comment);
//   const postcontainer = document.querySelector("#post-container");
//   renderCommentPostTemplate(post, postContainer);
//   renderCommentTemplate(post.comments, commentContainer);
// }
// postTemplateFetch();
