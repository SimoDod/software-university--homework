import { post } from "./services.js";
import { showHomeView,renderEl } from "./home.js";
import { userStatus } from "./util.js";


export function showCreateView() {
    [...document.querySelectorAll('section')].forEach(a=> a.style.display = 'none');
    document.getElementById('createRecipe-view').style.display = 'block';
}

let url = 'data/recipes';

let form = document.querySelector('#createRecipe-view form')
form.addEventListener('submit', createRecipe)

async function createRecipe(e) {
    e.preventDefault()
    const dataF = new FormData(e.target)
    //Object { name: "", img: "", ingredients: "", steps: "" }
    try {
        let body = [...dataF].reduce((p,[k,v]) => Object.assign(p, {[k]: v}),{});
        let ownerId = sessionStorage.getItem('id');
        let token = sessionStorage.getItem('accessToken')
        body._ownerId = ownerId;
        
        let data = {
            name: body.name,
            img: body.img,
            ingredients: body.ingredients.split('\n').map(l => l.trim()).filter(l => l !== ''),
            steps: body.steps.split('\n').map(l => l.trim()).filter(l => l !== '')
        }
    
        if(!body.name || !body.img || !body.ingredients || !body.steps) {
            throw new Error('Empty Fields')
        }
        
       let response = await post(url, data, token);

       showHomeView();
       userStatus();
       renderEl();
    } catch (error) {
        console.log(error);
    }
    
    
}