import { authentication } from "./util.js";
import { showHomeView } from "./home.js";
import { post } from "./services.js";
import { userStatus } from "./util.js";
import { renderEl } from "./home.js";

const formData = document.querySelector("#login-view form");
formData.addEventListener("submit", onLogin);

const url = "users/login";

export function showLoginView() {
  [...document.querySelectorAll("section")].forEach(
    (a) => (a.style.display = "none")
  );
  document.getElementById("login-view").style.display = "block";
}

async function onLogin(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const { email, password } = Object.fromEntries(form);

  try {
    if (!email || !password) {
      throw new Error("Empty fields");
    }

    let data = await post(url, { email, password });
    //Object { email: "", username: "", _id: "", accessToken: "" };
    authentication(data);
    showHomeView();
    userStatus();
    renderEl();
  } catch (error) {
    console.log(error);
  }
}
