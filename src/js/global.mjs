import { setLoginFormListener } from "./api/handlers/login.mjs";
import { registerFormListener } from "./api/handlers/registerFormListener.mjs";

// setLoginFormListener();
// registerFormListener();

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  registerFormListener();
}
