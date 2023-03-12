import { profilePosts } from "../api/profile/readProfilePosts.mjs";

const profileContainer = document.querySelector("#profile-post-wall");

/**
 * Populate the post element with data
 * @param {Object} postData
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.media - The URL of the media to be displayed in the post (optional).
 * @param {string} postData.body - The body of the post.
 * @param {string} postData.updated - The date the post was last updated.
 * @param {string} postData.tags - The tags associated with the post.
 * @param {string} postData.id - The ID of the post.
 * @returns {Element} The newly created post element.
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

  // Set the post comment link
  const commentPost = clone.querySelector(".comment-post");
  commentPost.href = `/post/comment/?id=${postData.id}`;

  // Set the post update link
  const updatePost = clone.querySelector(".update-post");
  updatePost.href = `/post/?id=${postData.id}`;

  // Append the post to the profile container
  profileContainer.append(clone);

  // Return the newly created post element
  return clone;
}

/**
 * Renders a list of posts based on the provided data and appends them to the specified parent element.
 *
 * @param {Array<Object>} postDataList - The list of post data objects to be rendered.
 * @param {Element} parent - The parent element to which the post elements will be appended.
 */
export function renderPostTemplates(postDataList, parent) {
  // Create an array of post elements based on the provided post data list
  const postElements = postDataList.map(postTemplate);

  // Append the post elements to the specified parent element
  parent.append(...postElements);
}

/**
 * Retrieves a list of posts for the current user and renders them using the `renderPostTemplates` function.
 * The rendered posts will be appended to the `#profile-post-wall` element.
 *
 * @async
 * @function profilePostTemplates
 */
async function profilePostTemplates() {
  // Get the list of posts for the current user
  const posts = await profilePosts();

  // Get the container element to which the posts will be appended
  const container = document.querySelector("#profile-post-wall");

  // Render the posts using the `renderPostTemplates` function
  renderPostTemplates(posts, container);
}

// Call the `profilePostTemplates` function to render the posts
profilePostTemplates();
