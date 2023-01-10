import { towns } from './towns.js';
import {html, render} from './node_modules/lit-html/lit-html.js'

const root = document.getElementById('towns');
const result = document.getElementById('result');

document.querySelector('button').addEventListener('click', search);

function search() {
   const input = document.getElementById('searchText').value;

   let count = 0;

   const toRend = generateTowns(input);

   render(toRend, root);

   towns.forEach(t => {
      t.includes(input) ? count++ : 0
   });
   
   if(input == '') count = 0;

   result.textContent = `${count} matches found`;
}

function generateTowns(input) {
   
   const ul = html`<ul>${towns.map(t => html`<li class="${(t.includes(input)) && input !== '' ? "active" : ""}">${t}</li>`)}</ul>`;
   return ul;
}

