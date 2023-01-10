import { html, render } from "./node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

const root = document.getElementById('root');

function onSubmit(e) {
    e.preventDefault()
    const towns = document.getElementById('towns').value.split(', ');
    const generatedEl = generateEl(towns)
    update(generatedEl)
}

function generateEl(towns) {
    let ul = html`<ul>
        ${towns.map(town => html`<li>${town}</li>`)}
        </ul>`

    return ul;
}

function update(generatedEl) {
    render(generatedEl, root)
}
