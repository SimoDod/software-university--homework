import { showHome } from "./home.js";

let main = document.querySelector("main");
let navButton = document.querySelector("nav a");
navButton.addEventListener("click", onClick);
window.addEventListener("load", showHome);
const detilsView = document.getElementById("detailsView");

function onClick(e) {
  e.preventDefault();
  showHome();
}

//detilsView.remove()
