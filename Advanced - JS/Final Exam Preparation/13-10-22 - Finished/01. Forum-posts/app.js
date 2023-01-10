window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("publish-btn");
  publishBtn.addEventListener("click", createPost);

  let inputTitle = document.getElementById("post-title");
  let inputCategory = document.getElementById("post-category");
  let textAreaContent = document.getElementById("post-content");

  let reviewList = document.getElementById("review-list");

  let publishedList = document.getElementById("published-list");

  let clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clear);

  function createPost() {
    let inputTitleValue = inputTitle.value;
    let inputCategoryValue = inputCategory.value;
    let textAreaContentValue = textAreaContent.value;

    if (!inputCategoryValue || !inputTitleValue || !textAreaContentValue) {
      return;
    }

    let li = document.createElement("li");
    let article = document.createElement("article");
    li.classList.add("rpost");
    article.innerHTML =
      `<h4>${inputTitleValue}</h4>` +
      `<p>Category: ${inputCategoryValue}</p>` +
      `<p>Content: ${textAreaContentValue}</p>`;

    li.appendChild(article);

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("action-btn", "edit");
    editBtn.addEventListener("click", editBtnFunc);

    let approveBtn = document.createElement("button");
    approveBtn.textContent = "Approve";
    approveBtn.classList.add("action-btn", "approve");
    approveBtn.addEventListener("click", approveBtnFunc);

    li.appendChild(approveBtn);
    li.appendChild(editBtn);

    reviewList.appendChild(li);
    textAreaContent.value = "";
    inputCategory.value = "";
    inputTitle.value = "";
  }

  function editBtnFunc(e) {
    let articleInfo = e.target.parentElement.querySelector("article");
    inputTitle.value = articleInfo.children[0].textContent;
    let returnInputCategory =
      articleInfo.children[1].textContent.split("Category: ")[1];
    inputCategory.value = returnInputCategory;
    let returnTextAreaContent =
      articleInfo.children[2].textContent.split("Content: ")[1];
    textAreaContent.value = returnTextAreaContent;

    e.target.parentElement.remove();
  }
  
  function approveBtnFunc(e) {
    let articleInfo = e.target.parentElement.querySelector("article");

    let li = document.createElement("li");
    let article = document.createElement("article");
    li.classList.add("rpost");
    article.innerHTML =
      `<h4>${articleInfo.children[0].textContent}</h4>` +
      `<p>Category: ${articleInfo.children[1].textContent}</p>` +
      `<p>Content: ${articleInfo.children[2].textContent}</p>`;
    li.appendChild(article);
    publishedList.appendChild(li);

    e.target.parentElement.remove();
  }

  function clear() {
    let clearLi = Array.from(publishedList.children);
    clearLi.forEach((li) => li.remove());
  }
}
