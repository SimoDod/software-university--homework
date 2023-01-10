import { showCreateView } from "./create.js";
import { showHomeView } from "./home.js";
import { showLoginView } from "./login.js";
import { showRegisterView } from "./register.js";
import "./logout.js";
import { userStatus } from "./util.js";
import {logout} from './logout.js'
import {renderEl} from './home.js'

document.querySelector("nav").addEventListener("click", onNavigation);

userStatus();
showHomeView();
renderEl()

function activeBtn(e) {
  [...document.querySelectorAll("a")].forEach((a) => {
    a.classList.remove("active");
  });
  e.target.classList.add("active");
}

function onNavigation(e) {
  if (e.target.nodeName === "A") {
    let buttonTarget = e.target.textContent;
    userStatus();

    switch (buttonTarget) {
      case "Catalog":
        showHomeView();
        activeBtn(e);
        renderEl()
        break;

      case "Create Recipe":
        showCreateView();
        activeBtn(e);
        break;

      case "Logout":
        logout()
        break;

      case "Login":
        showLoginView();
        activeBtn(e);
        break;

      case "Register":
        showRegisterView();
        activeBtn(e);
        break;

      default:
        break;
    }
  }
}
