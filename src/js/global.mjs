import { setLoginFormListener } from "./api/handlers/login.mjs";
import { registerFormListener } from "./api/handlers/registerFormListener.mjs";

import * as templates from "./templates/index.mjs";
import * as postFetch from "./api/auth/posts/index.mjs";
import { renderPostTemplate, renderPostTemplates } from "./templates/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  registerFormListener();
}

// post.createPost();
// post.updatePost();
// post.removePost();
// post.getPost();
// post.getPosts();

async function testTemplate() {
  const posts = await postFetch.getPosts();
  const post = posts[45];
  const container = document.querySelector("#card-container");
  renderPostTemplate(post, container);
}

// testTemplate();

async function testTemplates() {
  const posts = await postFetch.getPosts();
  const container = document.querySelector("#card-container");
  templates.renderPostTemplates(posts, container);
}

testTemplates();
