function solve(input) {
  let juiceList = {};
  let resObj = {};

  for (const juiceLine of input) {
    let [juiceName, quantity] = juiceLine.split(" => ");
    quantity = Number(quantity);

    if (!juiceList[juiceName]) {
      juiceList[juiceName] = quantity;
      
      if (juiceList[juiceName] >= 1000) {
        let [bottles, rest] = (juiceList[juiceName] / 1000).toString().split(".");
        bottles = Number(bottles);
        rest = Number(rest);
        juiceList[juiceName] = rest;
        if (!resObj[juiceName]) {
          resObj[juiceName] = bottles;
        } else {
          resObj[juiceName] += bottles;
        }
      }
    } else {
      juiceList[juiceName] += quantity;
      if (juiceList[juiceName] >= 1000) {
        let [bottles, rest] = (juiceList[juiceName] / 1000).toString().split(".");
        bottles = Number(bottles);
        rest = Number(rest);
        juiceList[juiceName] = rest;
        if (!resObj[juiceName]) {
          resObj[juiceName] = bottles;
        } else {
          resObj[juiceName] += bottles;
        }
      }
    }
  } 

  for (const key in resObj) {
    console.log(`${key} => ${resObj[key]}`);
  }
}
solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
