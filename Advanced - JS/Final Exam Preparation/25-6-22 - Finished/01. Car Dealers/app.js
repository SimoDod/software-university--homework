window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("publish");
  publishBtn.addEventListener("click", createOffer);
  let tabbleBody = document.getElementById("table-body");

  let inputFields = document.querySelectorAll("input");
  let selectField = document.querySelector("select");
  let soldCarsList = document.getElementById('cars-list')

  let profitMade = 0;
  
  function createOffer(e) {
    e.preventDefault();

    let data = [];

    for (let i = 0; i < inputFields.length; i++) {
      if (i === 3) {
        data.push(selectField.value);
      }
      data.push(inputFields[i].value);
    }
    let originalCost = Number(data[4]);
    let sellingPrice = Number(data[5]);

    for (const el of data) {
      if (!el) return;
    }
    
    if (originalCost >= sellingPrice) return;
    
    let newTr = document.createElement("tr");
    newTr.classList.add("row");

    for (const el of data) {
      let td = document.createElement("td");
      td.textContent = el;
      newTr.appendChild(td);
    }

    let editBtn = document.createElement("button");
    editBtn.addEventListener("click", editBtnFunc);
    let sellBtn = document.createElement("button");
    sellBtn.addEventListener("click", sellBtnFunc);
    editBtn.classList.add("action-btn", "edit");
    sellBtn.classList.add("action-btn", "sell");
    editBtn.textContent = "Edit";
    sellBtn.textContent = "Sell";

    let newTd = document.createElement("td");

    newTd.appendChild(editBtn);
    newTd.appendChild(sellBtn);
    newTr.appendChild(newTd);
    tabbleBody.appendChild(newTr);

    selectField.value = "";
    for (const el of inputFields) {
      el.value = "";
    }
  }
  function editBtnFunc(e) {
    let elementsInfo = e.target.parentElement.parentElement;
    inputFields[0].value = elementsInfo.children[0].textContent;
    inputFields[1].value = elementsInfo.children[1].textContent;
    inputFields[2].value = elementsInfo.children[2].textContent;
    inputFields[3].value = elementsInfo.children[4].textContent;
    document.getElementById("fuel").value =
      elementsInfo.children[3].textContent;
    inputFields[4].value = elementsInfo.children[5].textContent;
    elementsInfo.remove();
  }

  function sellBtnFunc(e) {
    let elementsInfo = e.target.parentElement.parentElement;
    let li = document.createElement('li');
    li.classList.add('each-list');
    
    let makeText = elementsInfo.children[0].textContent;
    let model = elementsInfo.children[1].textContent;
    let yearText = elementsInfo.children[2].textContent;
    let originalValue = Number(elementsInfo.children[4].textContent)
    let sellingValue = Number(elementsInfo.children[5].textContent)
    
    let makeSpan = document.createElement('span');
    let yearSpan = document.createElement('span');
    let sumDiff = document.createElement('span');
    
    makeSpan.textContent = makeText + ' ' + model;
    yearSpan.textContent = yearText
    sumDiff.textContent = sellingValue - originalValue;

    li.appendChild(makeSpan);
    li.appendChild(yearSpan);
    li.appendChild(sumDiff);
    profitMade += sellingValue - originalValue;
    soldCarsList.appendChild(li)
    document.getElementById('profit').textContent = profitMade.toFixed(2)
    elementsInfo.remove();
  }
}
