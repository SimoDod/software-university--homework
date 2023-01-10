function solution() {
  let store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let productLibrary = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  return function inputHandler(input) {
    let actionHandler = cmdOption();
    let [cmd, item, quantity] = input.split(" ");
    return actionHandler[cmd](item, quantity);
  };

  function cmdOption() {
    return {
      restock: (microelement, quantity) => {
        store[microelement] += Number(quantity);
        return "Success";
      },
      prepare: (recipe, quantity) => {
        for (let i = 0; i < quantity; i++) {
          for (const [k, v] of Object.entries(productLibrary[recipe])) {
            if (store[k] - v < 0) {
              return `Error: not enough ${k} in stock`;
            } else {
              store[k] -= v;
            }
          }
        }
        return "Success";
      },
      report: () => {
        let buff = [];
        for (const [k, v] of Object.entries(store)) {
          buff.push(`${k}=${v}`);
        }

        return buff.join(" ");
      },
    };
  }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("restock protein 50"));
console.log(manager("restock carbohydrate 50"));
console.log(manager("restock fat 50"));
console.log(manager("prepare lemonade 3")); // Error: not enough carbohydrate in stock
console.log(manager("report"));
