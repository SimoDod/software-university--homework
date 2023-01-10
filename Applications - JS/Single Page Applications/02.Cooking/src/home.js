import { get } from "./services.js";
import { userStatus } from "./util.js";

let homeView = document.getElementById("home-view");
let url = "data/recipes";

export function showHomeView() {
  [...document.querySelectorAll("section")].forEach(
    (a) => (a.style.display = "none")
  );
  document.getElementById("home-view").style.display = "block";
}

export async function renderEl() {
  let response = await get(url);
  homeView.innerHTML = "";
  
  Object.values(response).forEach((el) => {
    //Object { _ownerId: "",name: ", img: "", ingredients: (4) […], steps: (3) […], _createdOn: , _id: "" }
    let ingridients = el.ingredients.map(ingr => `<li>${ingr}</li>`).join('');
    let steps = el.steps.map(step => `<p>${step}</p>`).join('');
    let template = `<article data-id="${el._ownerId}" id="${el._id}" class="preview">
    <h2>${el.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="${el.img}">
        </div>
        <div class="ingredients" style="display: none;">
            <h3>Ingredients:</h3>
            <ul>${ingridients}</ul>
        </div>
    </div>
    <div class="description" style="display: none;">
        <h3>Preparation:</h3>
    ${steps}
    </div>
    </article>`
    
    if(userStatus()) {
      let token = userStatus();
      if(template.includes(token)) {
        homeView.innerHTML += template;
      }
    } else {
      homeView.innerHTML += template;
    }
    
  });

  [...document.querySelectorAll("article")].forEach((el) =>
    el.addEventListener("click", showMore)
  );
}

function showMore() {
  let steps = this.querySelector('div.description');
  let ingredients = this.querySelector('div.ingredients');
  let check = steps.getAttribute('style');

  if(check == 'display: none;') {
    steps.style.display = 'block';
    ingredients.style.display = 'block';
  } else {
    steps.style.display = 'none';
    ingredients.style.display = 'none';
  }
}


