function search() {
   let inputMatchingElement = document.getElementById("searchText").value;
   let towns = Array.from(document.querySelectorAll("#towns li"));
   let count = 0;
 
   towns.forEach((x) => {
     x.style = "text-decoration: none";
   });
 
   towns.forEach((x) => {
     if (
       x.textContent.includes(inputMatchingElement) &&
       inputMatchingElement !== ""
     ) {
       x.style = "text-decoration: underline; font-weight: bold;";
       count++;
     }
   });
 
   document.getElementById("result").textContent = count + " matches found";
 }