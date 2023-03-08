//Example for createElement
// export function postTemplate(postData) {
//   const post = document.createElement("div");
//   post.classList.add("title", "card", "mb-3");
//   post.innerText = postData.title;

//   if (postData.body) {
//     const body = document.createElement("div");
//     body.classList.add("body-text");
//     body.innerText = postData.body;
//     post.append(body);
//   } else if (postData.media) {
//     const img = document.createElement("img");
//     img.classList.add("img-fluid", "rounded", "h-100", "object-fit-cover");
//     img.src = postData.media;
//     img.alt = postData.title;
//     post.append(img);
//   }

//   return post;
// }

import { getPosts } from "../api/auth/posts/read.mjs";

// test function
import { getFilteredPosts } from "../api/handlers/tagsFilter.mjs";

const postContainer = document.querySelector("#post-wall");

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

  postContainer.append(clone);

  console.log(postData);
  return clone;
}

export function renderPostTemplates(postDataList, parent) {
  const postElements = postDataList.map(postTemplate);
  parent.append(...postElements);
}

// test function
export function renderFilteredPostTemplates(postDataList, parent) {
  const filteredPostElements = postDataList.map(postTemplate);
  parent.append(...filteredPostElements);
}

async function testTemplates() {
  const posts = await getPosts();
  const container = document.querySelector("#post-wall");
  renderPostTemplates(posts, container);
}

// test function
async function testFilteredTemplates() {
  const filteredposts = await getFilteredPosts();
  const container = document.querySelector("#post-wall");
  renderFilteredPostTemplates(filteredposts, container);
}

testTemplates();

// test function
testFilteredTemplates();
