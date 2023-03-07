import { getProfile } from "../api/profile/read.mjs";

const profileContainer = document.querySelector("#profileContainer");

export function profileTemplate(profileData) {
  const profileName = document.querySelector("#profileName");
  profileName.innerText = profileData.name;

  const profileAvatar = document.querySelector("#profileAvatar");
  profileAvatar.src = profileData.avatar;

  const profileBanner = document.querySelector("#profileBanner");
  profileBanner.src = profileData.banner;

  const followerCount = document.querySelector(".follower-count");
  followerCount.innerText = profileData._count.followers;

  const followingCount = document.querySelector(".following-count");
  followingCount.innerText = profileData._count.following;
}

async function profileTempFetch() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const profile = await getProfile(name);
  const profileOwner = profile;

  renderProfileTemp(profile, profileContainer);
}

profileTempFetch();

function renderProfileTemp(profileData, parent) {
  parent.append(profileTemplate(profileData));
}
