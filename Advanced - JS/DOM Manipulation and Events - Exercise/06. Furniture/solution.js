function solve() {
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate() {
    let currData = JSON.parse(document.querySelectorAll("textArea")[0].value);

    for (const el of currData) {
      let newTr = document.createElement("tr");
      let tbody = document.getElementsByTagName("tbody")[0];

      newTr.innerHTML = `<td><img src=${el.img}></td>
                         <td><p>${el.name}<p></td>
                         <td><p>${el.price}</p></td>
                         <td><p>${el.decFactor}</p></td>
                         <td><input type="checkbox"></td>`;
      tbody.appendChild(newTr);
    }
  }

  function buy() {
    let currData = document.querySelectorAll("textArea")[1];

    let allRows = document.querySelectorAll("tbody tr");

    let itemNames = [];
    let totalPrice = 0;
    let decCounter = 0;
    let decTotal = 0;

    for (const el of allRows) {
      let isCheck = el.children[4].children[0].checked;
      if (isCheck) {
        itemNames.push(el.children[1].children[0].textContent);

        totalPrice += Number(el.children[2].children[0].textContent);

        decTotal += Number(el.children[3].children[0].textContent);
        decCounter++;
      }
    }
    let avgDecFac = decTotal / decCounter;
    currData.textContent = `Bought furniture: ${itemNames.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${avgDecFac}`;
  }
}
