import { loginFormListener } from "./api/auth/login.mjs";
import { registerFormListener } from "./api/handlers/register.mjs";
import { createPostFormListener } from "./api/handlers/createPost.mjs";
import { updatePostFormListener } from "./api/handlers/updatePost.mjs";
import { removePostListener } from "./api/handlers/deletePost.mjs";
import { setUpdateProfile } from "./api/handlers/updateProfile.mjs";
// import { updateProfileMedia } from "./api/handlers/profileMedia.mjs";
import { commentPostFormListener } from "./api/handlers/commentPost.mjs";

import { profileTemplate } from "./templates/profile.mjs";
import * as templates from "./templates/index.mjs";
import * as postFetch from "./api/auth/posts/index.mjs";
import { renderPostTemplates } from "./templates/index.mjs";

import { load } from "./api/storage/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
  loginFormListener();
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
} else if (path === "/profile/edit" || path === "/profile/edit/index.html") {
  setUpdateProfile();
} else if (path === "/profile/edit/index.html") {
  updateProfileMedia();
} else if (path === "/post/comment/" || path === "/post/comment/index.html")
} else if (path === "/post/comment/" || path === "/post/comment/index.html") {
  commentPostFormListener();
} else if (path === "/profile/" || path === "/profile/index.html") {
  profileTemplate();
}

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

// async function testTemplates() {
//   const posts = await postFetch.getPosts();
//   const container = document.querySelector("#post-wall");
//   renderPostTemplates(posts, container);
// }

// testTemplates();

const profile = load("profile");

const myProfileA = document.querySelector(".myProfileAside");
const myProfileB = document.querySelector(".myProfileNav");
myProfileA.href = `/profile/?name=${profile.name}`;
myProfileB.href = `/profile/?name=${profile.name}`;
