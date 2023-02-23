//Example for createElement
// export function postTemplate(postData) {
//   const post = document.createElement("div");
//   post.classList.add("title", "card", "mb-3");
//   post.innerText = postData.title;

//   if (postData.body) {
//     const body = document.createElement("div");
//     body.classList.add("body-text");
//     body.innerText = postData.body;
//     post.append(body);
//   } else if (postData.media) {
//     const img = document.createElement("img");
//     img.classList.add("img-fluid", "rounded", "h-100", "object-fit-cover");
//     img.src = postData.media;
//     img.alt = postData.title;
//     post.append(img);
//   }

//   return post;
// }

const postContainer = document.querySelector("#post-wall");

export function postTemplate(postData) {
  const template = document.querySelector("#template-post");
  const clone = template.content.cloneNode(true);

  clone.querySelector("h5").innerText = postData.title;

  // const postTitle = clone.querySelector(".title-text");
  // postTitle.innerText = postData.title;

  const img = clone.querySelector("img");
  img.src = postData.media;

  const bodyText = clone.querySelector(".body-text");
  bodyText.innerText = postData.body;

  const dateText = clone.querySelector(".date-text");
  dateText.innerText = `Updated ${postData.updated.substring(0, 10)}`;

  const tagsText = clone.querySelector(".tags-text");
  tagsText.innerText = postData.tags[0];

  // console.log(postData.tags);

  const avatarImg = clone.querySelector("#avatar-img");
  avatarImg.src = postData.author.avatar;

  const authorName = clone.querySelector("#username");
  authorName.innerText = postData.author.name;

  const updatePost = clone.querySelector(".update-post");
  updatePost.href = `/post/?id=${postData.id}`;

  postContainer.append(clone);

  // return post;
}

export function renderPostTemplate(postData, parent) {
  document.body.append(postTemplate(postData));
  console.log(postData);
}

export function renderPostTemplates(postDataList, parent) {
  const postElements = postDataList.map(postTemplate);
  document.body.append(...postElements);
  console.log(postDataList);
}
