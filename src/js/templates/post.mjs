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

export function postTemplate(postData) {
  const template = document.querySelector("#template-post");
  const clone = template.content.cloneNode(true);
  clone.querySelector("h5").innerText = postData.title;

  const bodyText = clone.querySelector(".body-text");
  bodyText.innerText = postData.body;

  document.body.append(clone);

  // return post;
}

export function renderPostTemplate(postData, parent) {
  document.body.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  const postElements = postDataList.map(postTemplate);
  document.body.append(...postElements);
  console.log(postDataList);
}
