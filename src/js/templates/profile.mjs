import { getProfile } from "../api/profile/read.mjs";

const profileContainer = document.querySelector("#profileContainer");
const path = location.pathname;

/**
 * Renders the profile information into the DOM
 * @param {Object} profileData - The data for the profile
 * @returns {void}
 */
export function profileTemplate(profileData) {
  //Set the profile name
  const profileName = document.querySelector("#profileName");
  profileName.innerText = profileData.name;

  // Set the avatar image, or select general image if not provided
  const profileAvatar = document.querySelector("#profileAvatar");
  if (profileData.avatar) {
    profileAvatar.src = profileData.avatar;
  } else {
    profileAvatar.src =
      "https://images.unsplash.com/photo-1634324173063-909962333bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80";
  }

  // Set the banner image, or select general image if not provided
  const profileBanner = document.querySelector("#profileBanner");
  if (profileData.banner) {
    profileBanner.src = profileData.banner;
  } else {
    profileBanner.src =
      "https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80";
  }

  // Set the follower count
  const followerCount = document.querySelector(".follower-count");
  followerCount.innerText = profileData._count.followers;

  // Set the following count
  const followingCount = document.querySelector(".following-count");
  followingCount.innerText = profileData._count.following;
}

/**
 * Renders the profile details of the user
 * @param {Object} profileData - The data for the profile details
 * @param {HTMLElement} parent - The parent element to append the details to
 * @returns {void}
 */
export function profileDetails(profileData) {
  //Set the email details
  const emailDetail = document.querySelector(".email-details");
  emailDetail.innerText = profileData.email;

  // Set the posts counter
  const PostsDetail = document.querySelector(".posts-details");
  PostsDetail.innerText = profileData._count.posts;
}

/**
 * Renders the profile details into the DOM
 * @param {Object} profileData - The data for the profile
 * @param {HTMLElement} parent - The parent element to append the details to
 * @returns {void}
 */
function renderProfileDetails(profileData, parent) {
  if (parent) {
    parent.append(profileDetails(profileData));
  }
}

/**
 * Fetches the profile data and renders it into the DOM
 * @returns {void}
 */
export async function profileFetch() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const profile = await getProfile(name);

  // Render the profile and profile details .
  renderProfile(profile, profileContainer);
  renderProfileDetails(profile, profileContainer);
}

// If the current path is "/profile/", fetch and render the profile
if (path === "/profile/") {
  profileFetch();
}

/**
 * Renders the profile into the DOM
 *
 * @param {Object} profileData - The data for the profile
 * @param {HTMLElement} parent - The parent element to append the profile to
 * @returns {void}
 */
function renderProfile(profileData, parent) {
  if (parent) {
    parent.append(profileTemplate(profileData));
  }
}
