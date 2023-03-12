import * as postFetch from "../api/auth/posts/index.mjs";

const postContainer = document.querySelector("#post-container");
const commentContainer = document.querySelector("#comment-container");

/**
 * Creates a post template with the given post data.
 *
 * @function
 * @param {object} postData - The post data object.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.body - The body text of the post.
 * @param {string} postData.media - The URL of the post media, if any.
 * @param {string} postData.updated - The date the post was last updated.
 * @param {string[]} postData.tags - An array of tags associated with the post.
 * @param {object} postData.author - The author of the post.
 * @param {string} postData.author.name - The name of the author.
 * @param {string} postData.author.avatar - The URL of the author's avatar image, if any.
 * @returns {HTMLElement} - The cloned post template element.
 */
export function commentPostTemplate(postData) {
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
  dateText.innerText = `Updated ${postData.updated.substring(0, 10)}`;

  // Set the post tags
  const tagsText = clone.querySelector(".tags-text");
  tagsText.innerText = postData.tags;

  // Set the author name and avatar image, or select general image if not provided
  const avatarImg = clone.querySelector("#avatar-img");
  if (postData.author.avatar) {
    avatarImg.src = postData.author.avatar;
  } else {
    avatarImg.src =
      "https://images.unsplash.com/photo-1634324173063-909962333bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80";
  }

  // Set the post author name
  const authorName = clone.querySelector("#username");
  authorName.innerText = postData.author.name;
  authorName.href = `/profiles/${postData.author.name}?`;

  // Append the post to the profile container
  postContainer.append(clone);

  // Return the newly created post element
  return clone;
}

/**
 * Creates a comment template with the given comment data.
 * @function
 * @param {object} postData - The comment data object.
 * @param {string} postData.body - The body text of the comment.
 * @param {object} postData.author - The author of the comment.
 * @param {string} postData.author.name - The name of the author.
 * @param {string} postData.author.avatar - The URL of the author's avatar image, if any.
 * @returns {HTMLElement} - The cloned comment template element.
 */
function commentTemplate(postData) {
  const commentTemplate = document.querySelector("#template-comment");
  const clone = commentTemplate.content.cloneNode(true);

  // Set the avatar image, or select general image if not provided
  const avatarAuthor = clone.querySelector(".avatar-img");
  if (postData.author.avatar) {
    avatarAuthor.src = postData.author.avatar;
  } else {
    avatarAuthor.src =
      "https://images.unsplash.com/photo-1634324173063-909962333bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80";
  }
  // Set the author name for the comment
  const commentAuthor = clone.querySelector("#username");
  commentAuthor.innerText = postData.author.name;

  // Set the comment body
  const commentText = clone.querySelector(".body-text");
  commentText.innerText = postData.body;

  // Append the comment to the comment container
  commentContainer.append(clone);

  // Return the newly created post element
  return clone;
}

/**
 * Fetches the post and its comments from the server and renders the post and comment templates.
 * @async
 * @function
 * @returns {Promise<void>} - A Promise that resolves when the post and comment templates have been rendered.
 */
async function commentTemplateFetch() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");
  // Fetch the post and its comments from the server.
  const post = await postFetch.getPost(postId);
  const postComments = post.comments;

  // Render the post and comment templates.
  renderCommentPostTemplate(post, postContainer);
  renderCommentTemplate(postComments, commentContainer);
}

// Call the function to fetch and render the comment templates.
commentTemplateFetch();

/**
 * Renders the comment post template with the given post data and appends it to the parent element.
 * @function
 * @param {object} postData - The data for the post.
 * @param {HTMLElement} parent - The parent element to append the rendered template to.
 * @returns {void}
 */
function renderCommentPostTemplate(postData, parent) {
  parent.innerHTML = "";
  parent.append(commentPostTemplate(postData));
}

/**
 * Renders the comment templates with the given post data and appends them to the parent element.
 * @function
 * @param {object[]} postData - An array of comment data objects.
 * @param {HTMLElement} parent - The parent element to append the rendered templates to.
 * @returns {void}
 */
function renderCommentTemplate(postData, parent) {
  const commentElements = postData.map(commentTemplate);
  parent.innerHTML += "";
  parent.append(...commentElements);
}
