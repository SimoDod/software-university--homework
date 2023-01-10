function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let studentInfoElements = Array.from(document.querySelectorAll('tbody tr'));
      let searchInputElement = document.getElementById('searchField').value;

      for (const el of studentInfoElements) {
         if (el.textContent.includes(searchInputElement)) {
            el.className = `select`
         } else {
            el.className = '';
         }
      }
   }
}