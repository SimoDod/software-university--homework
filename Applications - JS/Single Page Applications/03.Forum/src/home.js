import { showDetails } from "./details.js";

const homeView = document.getElementById("homeView");
const main = document.querySelector("main");
const comments = document.querySelector("div.topic-title");
const form = document.querySelector("#homeView form");
form.addEventListener("submit", createNewTopic);
const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

async function renderHome() {
  let data = await restHandler("GET", null, url);

  comments.innerHTML = "";

  Object.values(data).forEach((topic) => {
    let container = document.createElement("div");
    container.setAttribute("class", "topic-container");
    container.addEventListener("click", showDetails);
    //{ topicName: "123", username: "1111", postText: "111", _id: "19258f5c-13cd-4483-8f45-a503ed1cb3e6" }
    container.innerHTML = `
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <a href="#" class="normal">
                    <h2 id="${topic._id}">${topic.topicName}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${topic.date}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${topic.username}</span></p>
                        </div>
                    </div>
    
    
                </div>
            </div>
        </div>`;
    comments.appendChild(container);
  });
}

export function showHome() {
  main.replaceChildren(homeView);
  renderHome();
}

function createNewTopic(e) {
  e.preventDefault();
  const submitter = e.submitter.getAttribute("class");
  let newForm = Object.fromEntries(new FormData(e.target));
  let d = new Date();
  let date = formatDate(d);

  newForm.date = date;
  newForm = JSON.stringify(newForm);

  switch (submitter) {
    case "public":
      restHandler("POST", newForm, url);
      break;

    case "cancel":
      e.target.reset();
      break;

    default:
      break;
  }
}

export async function restHandler(method, body, url) {
  let response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  let data = await response.json();
  return data;
}

export function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
}
