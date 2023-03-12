import { getFilteredPosts } from "../api/handlers/tagsFilter.mjs";

const postContainer = document.querySelector("#post-wall");
const path = location.pathname;

/**
Creates a template for a post using the provided post data and returns a clone of the template.
*@param {Object} postData - The data of the post to be displayed in the template.
*@param {string} postData.title - The title of the post.
*@param {string} postData.media - The URL of the media associated with the post.
*@param {string} postData.body - The body text of the post.
*@param {string} postData.updated - The date the post was last updated.
*@param {string} postData.tags - The tags associated with the post.
*@param {Object} postData.author - The author of the post.
*@param {string} postData.author.name - The name of the author.
*@param {string} postData.author.avatar - The URL of the author's avatar.
*@returns {Node} A clone of the post template with the provided post data.
*/
export function postTemplate(postData) {
  // Get the post template element and clone it
  const template = document.querySelector("#template-post");
  const clone = template.content.cloneNode(true);

  // Set the post title
  const postTitle = clone.querySelector(".title-text");
  postTitle.innerText = postData.title;

  // Set the post media (if provided)
  if (postData.media) {
    const img = clone.querySelector("img");
    img.src = postData.media;
    img.alt = postData.title;
  }

  // Set the post body
  const bodyText = clone.querySelector(".body-text");
  bodyText.innerText = postData.body;

  // Set the post date
  const dateText = clone.querySelector(".date-text");
  dateText.innerText = `Updated: ${postData.updated.substring(0, 10)}`;

  // Set the post tags
  const tagsText = clone.querySelector(".tags-text");
  tagsText.innerText = postData.tags;

  // Set the author name and avatar image, or select general image if not provided
  if (path === "/posts/" || "/posts/index.html") {
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
  }

  // Set the comment post icon
  const commentPost = clone.querySelector(".comment-post");
  commentPost.href = `/post/comment/?id=${postData.id}`;

  // Append the post to the post container
  postContainer.append(clone);

  // Return the newly created post element
  return clone;
}

/**
 * Renders filtered post templates to the specified parent element.
 * @param {Array} postDataList - The list of post data to be rendered.
 * @param {Element} parent - The parent element to which the post templates will be appended.
 * @returns {void}
 */
export function renderFilteredPostTemplates(postDataList, parent) {
  const filteredPostElements = postDataList.map(postTemplate);
  parent.append(...filteredPostElements);
}

/**
 * Renders filtered post templates to the post wall container.
 * @returns {Promise<void>} - A Promise that resolves when the post templates are rendered.
 */
async function FilteredTemplates() {
  const filteredposts = await getFilteredPosts();
  const container = document.querySelector("#post-wall");
  renderFilteredPostTemplates(filteredposts, container);
}

// Call the `FilteredTemplates` function to render the filtered post templates.
FilteredTemplates();
