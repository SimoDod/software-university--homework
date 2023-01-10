import { cats } from "./catSeeder.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById('allCats')

window.addEventListener('load', loadCats)

function loadCats() {
    const catList = html`<ul>${cats.map(c => createCatCard(c))}</ul>`;
    render(catList, root)
}



//Object { id: "100", statusCode: 100, statusMessage: "Continue", imageLocation: "cat100" }
function createCatCard(catInfo) {
    const catCard = html`
    <li>
    <img src="./images/${catInfo.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click="${showMore}" class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${catInfo.id}">
            <h4>Status Code: ${catInfo.statusCode}</h4>
            <p>${catInfo.statusMessage}</p>
        </div>
    </div>
    </li>`

    return catCard
}

function showMore(e) {
    const hiddenPart = e.target.parentElement.children[1];
    const isHidden = hiddenPart.style.display;

    if(isHidden == 'none') {
        hiddenPart.style.display = 'block';
        e.target.textContent = 'Hide status code'
    } else {
        hiddenPart.style.display = 'none';
        e.target.textContent = 'Show status code'
    }

}