import { setLoginFormListener } from "./api/handlers/login.mjs";
import { registerFormListener } from "./api/handlers/registerFormListener.mjs";
import * as post from "./api/auth/posts/index.mjs";

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
post.getPosts().then(console.log);

// post.getPost(640).then(console.log);
