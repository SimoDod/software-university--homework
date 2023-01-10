function solve() {
  let departBtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");
  let infoField = document.querySelector("div .info");

  let busInfo = {
    nextStop: "depot",
    name: "",
  };

  async function depart() {
    departBtn.disabled = true;
    arriveBtn.disabled = false;

    let url = "http://localhost:3030/jsonstore/bus/schedule/";

    try {
      let response = await fetch(`${url}${busInfo.nextStop}`);

      let data = await response.json();

      infoField.textContent = `Next stop ${data.name}`;
      busInfo.name = data.name;
      busInfo.nextStop = data.next;
    } catch (error) {
        departBtn.disabled = true;
        arriveBtn.disabled = true;
        infoField.textContent = 'Error'
    }
  }

  function arrive() {
    departBtn.disabled = false;
    arriveBtn.disabled = true;

    infoField.textContent = `Arriving at ${busInfo.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
