import { userStatus } from "./util.js";
import { get } from "./services.js";
import { showHomeView, renderEl } from "./home.js";

const url = "users/logout";

export async function logout() {
  let token = sessionStorage.getItem("accessToken");
  try {
    await get(url, undefined, token);
    sessionStorage.clear();

    showHomeView();
    userStatus();
    renderEl();
  } catch (error) {
    console.log(error);
  }
}
