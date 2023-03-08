import { getProfile } from "../api/profile/read.mjs";

const profileContainer = document.querySelector("#profileContainer");

export function profileTemplate(profileData) {
  const profileName = document.querySelector("#profileName");
  profileName.innerText = profileData.name;

  const profileAvatar = document.querySelector("#profileAvatar");
  if (profileData.avatar) {
    profileAvatar.src = profileData.avatar;
  } else {
    profileAvatar.src =
      "https://images.unsplash.com/photo-1634324173063-909962333bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80";
  }

  const profileBanner = document.querySelector("#profileBanner");
  if (profileData.banner) {
    profileBanner.src = profileData.banner;
  } else {
    profileBanner.src =
      "https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80";
  }

  const followerCount = document.querySelector(".follower-count");
  followerCount.innerText = profileData._count.followers;

  const followingCount = document.querySelector(".following-count");
  followingCount.innerText = profileData._count.following;
}

export function profileDetails(profileData) {
  const emailDetail = document.querySelector(".email-details");
  emailDetail.innerText = profileData.email;

  const PostsDetail = document.querySelector(".posts-details");
  PostsDetail.innerText = profileData._count.posts;
}

function renderProfileDetails(profileData, parent) {
  parent.append(profileDetails(profileData));
}

async function profileTempFetch() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const profile = await getProfile(name);
  const profileOwner = profile;

  console.log(profile);

  renderProfileTemp(profile, profileContainer);
  renderProfileDetails(profile, profileContainer);
}

profileTempFetch();

function renderProfileTemp(profileData, parent) {
  parent.append(profileTemplate(profileData));
}
