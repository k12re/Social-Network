import { loginFormListener } from "./api/auth/login.mjs";
import { registerFormListener } from "./api/handlers/register.mjs";
import { createPostFormListener } from "./api/handlers/createPost.mjs";
import { updatePostFormListener } from "./api/handlers/updatePost.mjs";
import { removePostListener } from "./api/handlers/deletePost.mjs";
import { setUpdateProfile } from "./api/handlers/updateProfile.mjs";
import { commentPostFormListener } from "./api/handlers/commentPost.mjs";
import { searchPosts } from "./api/handlers/searchPosts.mjs";
import { profileTemplate } from "./templates/profile.mjs";
import { profileFetch } from "./templates/profile.mjs";
// import * as templates from "./templates/index.mjs";
// import * as postFetch from "./api/auth/posts/index.mjs";
import { load } from "./api/storage/index.mjs";

const path = location.pathname;

/**
 * Determines which listeners and templates to set up based on the current URL path.
 * @param {string} path - The current URL path.
 */
if (path === "/" || path === "/index.html") {
  loginFormListener();
} else if (
  path === "/profile/register/" ||
  path === "/profile/register/index.html"
) {
  registerFormListener();
} else if (path === "/posts/" || path === "/posts/index.html") {
  createPostFormListener();
} else if (path === "/post/" || path === "/post/index.html") {
  updatePostFormListener();
} else if (path === "/posts/" || path === "/posts/index.html") {
  profilePostTemplates();
  searchPosts();
} else if (path === "/post/" || path === "/post/index.html") {
  removePostListener();
} else if (path === "/profile/edit" || path === "/profile/edit/index.html") {
  setUpdateProfile();
} else if (path === "/profile/edit/index.html") {
  updateProfileMedia();
} else if (path === "/post/comment/" || path === "/post/comment/index.html") {
  commentPostFormListener();
} else if (path === "/profile/" || path === "/profile/index.html") {
  profileFetch();
}

const profile = load("profile");

/**
 * Sets the profile links in the sidebar and navigation bar if they exist and the path is the homepage.
 * @param {string} path - The current URL path.
 * @param {Object} profile - The profile data to use for the links.
 */
const myProfileA = document.querySelector(".myProfileAside");
const myProfileB = document.querySelector(".myProfileNav");
if (myProfileA && myProfileB && (path === "/" || "/index.html")) {
  myProfileA.href = `/profile/?name=${profile.name}`;
  myProfileB.href = `/profile/?name=${profile.name}`;
}
