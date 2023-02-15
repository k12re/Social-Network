import { setLoginFormListener } from "./api/handlers/login.mjs";
import { registerFormListener } from "./api/handlers/registerFormListener.mjs";

const path = location.pathname;

if (path === "/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  registerFormListener();
}
