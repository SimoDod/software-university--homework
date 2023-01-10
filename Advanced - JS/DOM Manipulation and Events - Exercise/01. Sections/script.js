function create(words) {

   for (const el of words) {

      let pEl = document.createElement('p');

      pEl.style.display = "none"
      let divEl = document.createElement('div')

      divEl.addEventListener('click', onClick);

      function onClick(e) {
         e.target.childNodes[0].style.display = "block"
         console.log(e.target.childNodes[0]);
      }

      let content = document.getElementById('content')
      pEl.textContent = el;
      divEl.id = "content"

      content.appendChild(divEl).appendChild(pEl)
   }
}