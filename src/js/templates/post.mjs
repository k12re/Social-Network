export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("title", "card", "mb-3");
  post.innerText = postData.title;

  if (postData.body) {
    const body = document.createElement("div");
    body.classList.add("body-text");
    body.innerText = postData.body;
    post.append(body);
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  const postElements = postDataList.map(postTemplate);
  parent.append(...postElements);
}
