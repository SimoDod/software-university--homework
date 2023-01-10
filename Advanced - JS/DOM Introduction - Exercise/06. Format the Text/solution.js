function solve() {
  let inputElement = document.getElementById('input').value;
  let outputElement  = document.getElementById('output')
  let textArray = inputElement.split('.').filter(x => x.length > 0)
    
  for (let i = 0; i < textArray.length; i+=3) {
    let res = [];
    for (let a = 0; a < 3; a++) {
      if(textArray[i + a]) {
        res.push(textArray[i + a])
      }
    
    }
    let result = res.join('. ') + '.'.trim()
    outputElement.innerHTML += `<p>${result}</p>`;
  }
}