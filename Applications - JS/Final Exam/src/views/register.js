import { html } from "../../node_modules/lit-html/lit-html.js";
import { onRegister } from "../api/data.js";
import { setUserData } from "../util.js";

let context = null;
export async function showRegister(ctx) {
  ctx.render(registerTemplate());
  context = ctx;
}

const registerTemplate = () => html` 
<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="login-form" @submit=${onRegisterSubmit}>
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

const onRegisterSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  const rePass = formData.get("re-password");

  try {
    if (!email || !password || !rePass) throw new Error("Empty fields");
    if (password !== rePass) throw new Error("password do not match");

    const userData = await onRegister({ email, password });

    context.page.redirect("/dashboard");
    setUserData(userData);
    context.updateNav();
  } catch (error) {
    window.alert(error);
  }
};
