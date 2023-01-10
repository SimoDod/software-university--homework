import { html } from "../../node_modules/lit-html/lit-html.js";
import { onLogin } from "../api/data.js";
import { setUserData } from "../util.js";

let context = null;
export async function showLogin(ctx) {
    ctx.render(loginTemplate());
    context = ctx;
}

const loginTemplate = () => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${onLoginSubmit}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>`

const onLoginSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email');
    const password = formData.get('password');
    
    try {
        if(!email || !password) throw new Error('Empty fields');

        const userData = await onLogin({email, password});

        context.page.redirect('/dashboard');
        setUserData(userData);
        context.updateNav();
    } catch (error) {
        window.alert(error)
    }
}