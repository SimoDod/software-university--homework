function solve() {
  let textInputElement = document.getElementById("text").value.toLowerCase().split(' ');

  let matchInputElement = document.getElementById("naming-convention").value;
  
  switch (matchInputElement) {
    case "Camel Case":
      let bufferCamel = "";
      for (let i = 0; i < textInputElement.length; i++) {
        let firstWord = textInputElement[i][0].toUpperCase();
        let restOfWord = textInputElement[i].slice(1);
        let resultCamel = firstWord + restOfWord;

        bufferCamel += resultCamel;
      }
      let firstChar = bufferCamel[0].toLowerCase();
      let restOfChars = bufferCamel.slice(1);
      let endResult = firstChar + restOfChars;
      document.getElementById("result").textContent = endResult;
      break;

    case "Pascal Case":
      let bufferPascal = "";
      for (let i = 0; i < textInputElement.length; i++) {
        let firstWord = textInputElement[i][0].toUpperCase();
        let restOfWord = textInputElement[i].slice(1);
        let resultPascal = firstWord + restOfWord;

        bufferPascal += resultPascal;
      }
      document.getElementById("result").textContent = bufferPascal;
      break;

    default:
      document.getElementById("result").textContent = "Error!";
      break;
  }
}