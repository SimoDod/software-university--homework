import { restHandler, formatDate } from "./home.js";

const main = document.querySelector("main");
const form = document.querySelector("#detailsView form");
form.addEventListener("submit", createComment);

const detailsView = document.getElementById("detailsView");

const h2 = document.querySelector("div.theme-name h2");
const userComments = document.getElementById("user-comment");
const topicUserName = document.querySelector("div.header p span");
const topicDate = document.querySelector("div.header p time");
const postText = document.querySelector(".post-content");
const urlComments =
  "http://localhost:3030/jsonstore/collections/myboard/comments";

export function showDetails(e) {
  if (e.target.nodeName != "H2") return;
  main.replaceChildren(detailsView);

  loadComments(e);
}

async function loadComments(e) {
  e.preventDefault();
  if (e.target.nodeName == "H2") {
    const topicId = e.target.id;
    const url = "http://localhost:3030/jsonstore/collections/myboard/posts";
    const data = await restHandler("GET", null, url);

    let currTopic = Object.values(data).find((x) => x._id == topicId);

    //{ topicName: "1", username: "1", postText: "1", date: "", _id: "" }
    userComments.innerHTML = "";

    h2.textContent = currTopic.topicName;
    topicUserName.textContent = currTopic.username;
    topicDate.textContent = currTopic.date;
    postText.textContent = currTopic.postText;
    sessionStorage.setItem("id", topicId);

    renderComments();
  }
}

async function createComment(e) {
  e.preventDefault();
  let body = Object.fromEntries(new FormData(e.target));

  let id = sessionStorage.getItem("id");
  console.log(id);
  body.testId = id;
  let d = new Date();
  let date = formatDate(d);
  body.date = date;
  body = JSON.stringify(body);
  
  const dataComments = await restHandler("POST", body, urlComments);
}

async function renderComments() {
  let data = await restHandler("GET", null, urlComments);
  let id = sessionStorage.getItem('id')
  sessionStorage.clear();
  //Object { id: "c8c6ad21-9f28-44b2-a22a-cca5bb5a3767", _id: "08f46bae-8bdd-41d5-b05e-c37a88d3d9bd" }
  console.log(data);
  let currComments = Object.values(data).filter((x) => (x.testId === id));
   console.log(currComments);
  
  Object.values(currComments).forEach((comment) => {
    //console.log(comment);
    userComments.innerHTML += `<div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
            <div class="post-content">
                <p>${comment.postText}</p>
            </div>
        </div>
    </div>`;
  });
}
