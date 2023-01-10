function solve(input) {
  let cars = new Map();

  for (const carLine of input) {
    let [brand, model, quantity] = carLine.split(" | ");

    quantity = Number(quantity);

    if (!cars.has(brand)) {
      let newBrand = new Map();
      cars.set(brand, newBrand);
    }

    if (cars.get(brand).has(model)) {
      cars.get(brand).set(model, cars.get(brand).get(model) + quantity);
    } else {
      cars.get(brand).set(model, quantity);
    }
  }

  for (const [brand, info] of cars) {
    console.log(brand);
    for (const [model, quantity] of info) {
      console.log(`###${model} -> ${quantity}`);
    }
  }
}
solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
