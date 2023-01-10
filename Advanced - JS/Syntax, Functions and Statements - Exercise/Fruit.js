function solve(fruit, grams, kilogramPrice) {
  let money = (grams * kilogramPrice) / 1000;
  let weight = grams / 1000;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
  );
}
solve("orange", 2500, 1.8);
