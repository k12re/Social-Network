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

  // const commentPost = clone.querySelector(".comment-post");
  // commentPost.href = `/post/?id=${postData.id}/comment`;

  // const updatePost = clone.querySelector(".update-post");
  // updatePost.href = `/post/?id=${postData.id}`;

  postContainer.append(clone);

  return post;
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

async function testTemplate() {
  const posts = await postFetch.getPosts();
  const post = posts.pop();
  const comment = posts.pop().comments;
  //   console.log(post.comments);
  //   console.log(posts);
  //   console.log(comment);
  //   const postcontainer = document.querySelector("#post-container");
  renderCommentPostTemplate(post, postContainer);
  renderCommentTemplate(post.comments, commentContainer);
}
testTemplate();

async function commentTestTemplate() {
  const posts = await postFetch.getPosts();
  const post = posts.pop().comments;
  console.log(post);
  console.log(posts);
  //   const commentcontainer = document.querySelector("#comment-container");
  renderCommentTemplate(post, commentContainer);
}
commentTestTemplate();

function renderCommentPostTemplate(postData, parent) {
  document.body.append(commentPostTemplate(postData));
  //   console.log(postData);
}
renderCommentPostTemplate();

function renderCommentTemplate(postData, parent) {
  const commentElements = postData.map(commentTemplate);
  document.body.append(...commentElements);
}
