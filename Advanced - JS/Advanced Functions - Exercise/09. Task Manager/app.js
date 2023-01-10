function solve() {
  let task = document.getElementById("task");
  let description = document.getElementById("description");
  let dueDate = document.getElementById("date");

  let addButton = document.getElementById("add");
  addButton.addEventListener("click", addBtnFunc);

  let allSections = document.querySelectorAll("section div");
  let openSection = allSections[3];
  let inProgressSection = allSections[5];
  let completedSection = allSections[7];

  function addBtnFunc(e) {
    e.preventDefault();

    if (!task.value || !description.value || !dueDate.value) {
      return;
    }

    let article = document.createElement("article");
    let div = document.createElement("div");
    let startBtn = document.createElement("button");
    let deleteBtnOT = document.createElement("button");

    startBtn.textContent = "Start";
    deleteBtnOT.textContent = "Delete";

    startBtn.addEventListener("click", startBtnFunc);
    deleteBtnOT.addEventListener("click", deleteBtnOTFunc);

    div.classList.add("flex");
    startBtn.classList.add("green");
    deleteBtnOT.classList.add("red");

    article.innerHTML =
      `<h3>${task.value}</h3>` +
      `<p>Description: ${description.value}</p>` +
      `<p>Due Date: ${dueDate.value}</p>`;

    div.appendChild(startBtn);
    div.appendChild(deleteBtnOT);
    article.appendChild(div);
    openSection.appendChild(article);
  }

  function startBtnFunc(e) {
    let currDiv = e.target.parentElement;
    let currArticle = e.target.parentElement.parentElement;
    currDiv.children[0].remove();

    let finishBtn = document.createElement("button");
    finishBtn.addEventListener("click", finishBtnFunc);
    finishBtn.classList.add("orange");
    finishBtn.textContent = "Finish";

    currDiv.appendChild(finishBtn);
    inProgressSection.appendChild(currArticle);
  }

  function deleteBtnOTFunc(e) {
    e.target.parentElement.parentElement.remove();
  }

  function finishBtnFunc(e) {
    completedSection.appendChild(e.target.parentElement.parentElement);
    e.target.parentElement.remove();
  }
}
