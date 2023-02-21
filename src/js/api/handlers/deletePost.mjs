import { removePost, getPost } from "../auth/posts/index.mjs";

const deleteButton = document.querySelector("#delete-post");

export async function removePostListener() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  //   console.log(id);

  if (id) {
    deleteButton.addEventListener("click", () => {
      removePost(id);
      window.location.replace("/posts/");
    });
  }
}
removePostListener();
