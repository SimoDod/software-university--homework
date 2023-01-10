import { render } from "../node_modules/lit-html/lit-html.js";
import page from '../node_modules/page/page.mjs';
import { onLogout } from "./api/data.js";
import { clearUserData, getUserData } from "./util.js";
import { showAddAlbum } from "./views/addAlbum.js";
import { showDashboard } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";


const root = document.querySelector('div#wrapper main');

function middleWare(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}

page(middleWare);
page('index.html', '/');
page('/', showHome);
page('/dashboard', showDashboard)
page('/register', showRegister);
page('/login', showLogin);
page('/addAlbum', showAddAlbum);
page('/details/:id', showDetails);
page('/edit/:id', showEdit)
page.start();

updateNav();

document.querySelector('a[href="javascript:void(0)"]').addEventListener('click', async () => {
    try {
        
        await onLogout(); 
        clearUserData();
        updateNav();
        page.redirect('/dashboard');
        
    } catch (error) {
        window.alert(error)
    }
})


function updateNav() {
    if (getUserData()) {
        document.getElementsByClassName('guest')[0].style.display = 'none';
        document.getElementsByClassName('user')[0].style.display = 'block';
        
    } else {
        document.getElementsByClassName('user')[0].style.display = 'none';
        document.getElementsByClassName('guest')[0].style.display = 'block';
    }
}