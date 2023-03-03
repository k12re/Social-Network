import { setLoginFormListener } from "./api/handlers/login.mjs";
import { registerFormListener } from "./api/handlers/registerFormListener.mjs";
import { createPostFormListener } from "./api/handlers/createPost.mjs";
import { updatePostFormListener } from "./api/handlers/updatePost.mjs";
import { removePostListener } from "./api/handlers/deletePost.mjs";
import { commentPostFormListener } from "./api/handlers/commentPost.mjs";

import * as templates from "./templates/index.mjs";
import * as postFetch from "./api/auth/posts/index.mjs";
import { renderPostTemplates } from "./templates/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  registerFormListener();
} else if (path === "/posts/" || path === "/posts/index.html") {
  createPostFormListener();
} else if (path === "/post/" || path === "/post/index.html") {
  updatePostFormListener();
} else if (path === "/posts/" || path === "/posts/index.html") {
  testTemplates();
} else if (
  path === "/post/" ||
  path === "/post/index.html" ||
  path === "/post/comment" ||
  path === "/post/comment/index.html"
) {
  testTemplate();
} else if (path === "/post/" || path === "/post/index.html") {
  removePostListener();
} else if (path === "/post/comment/" || path === "/post/comment/index.html")
  commentPostFormListener();

// post.createPost();
// post.updatePost();
// post.removePost();
// post.getPost();
// post.getPosts();

// async function testTemplate() {
//   const posts = await postFetch.getPost();
//   const post = posts.id;
//   const container = document.querySelector("#post-container");
// renderPostTemplate(post, container);
// console.log(post.id);
// }

// testTemplate();

async function testTemplates() {
  const posts = await postFetch.getPosts();
  const container = document.querySelector("#post-wall");
  renderPostTemplates(posts, container);
}

testTemplates();
