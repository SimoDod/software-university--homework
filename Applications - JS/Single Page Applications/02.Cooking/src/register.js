import { authentication, userStatus } from "./util.js";
import { showHomeView,renderEl } from "./home.js";
import { post } from "./services.js";

export function showRegisterView() {
  [...document.querySelectorAll("section")].forEach(
    (a) => (a.style.display = "none")
  );
  document.getElementById("register-view").style.display = "block";
}

const form = document.querySelector("#register-view form");
form.addEventListener("submit", onRegister);

const url = "users/register";

async function onRegister(e) {
    e.preventDefault()
    let dataForm = new FormData(e.target);

  try {
    let { email, password, rePass } = [...dataForm].reduce(
      (p, [k, v]) => Object.assign(p, { [k]: v }),
      {}
    );
    
    if (!email || !password) {
      throw new Error("Empty fields");
    }
    if (password !== rePass) {
      throw new Error("Passwords don't match");
    }

    let data = await post(url, { email, password });
    
    authentication(data);
    showHomeView();
    userStatus();
    renderEl();
  } catch (error) {
    console.log(error);
  }
}


