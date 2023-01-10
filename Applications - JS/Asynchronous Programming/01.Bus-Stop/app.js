async function getInfo() {
  let inputField = document.getElementById("stopId");
  let divName = document.getElementById("stopName");
  let ulBuses = document.getElementById("buses");

  try {
    let url = "http://localhost:3030/jsonstore/bus/businfo";
    let response = await fetch(`${url}/${inputField.value}`);
    
    if(!response.ok){
        throw new Error('Error')
    }
    
    let data = await response.json();
    
    divName.textContent = data.name;
    ulBuses.innerHTML = '';
    for (const [key, value] of Object.entries(data.buses)) {
      let li = document.createElement("li");
      li.textContent = `Bus ${key} arrives in ${value} minutes`;
      ulBuses.appendChild(li);
    }
  } catch (error) {
    divName.textContent = "Error";
  }
}
