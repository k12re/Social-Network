import { removePost, getPost } from "../auth/posts/index.mjs";

const deleteButton = document.querySelector("#delete-post");

const path = location.pathname;

export async function removePostListener() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (path === "/post/" && id) {
    deleteButton.addEventListener("click", () => {
      removePost(id);
    });
  }
}
removePostListener();
