function sameNums(num) {
  let numToString = num.toString();
  let sum = 0;
  let state = true;

  for (let i = 0; i < numToString.length; i++) {
    sum += Number(numToString[i]);

    if (numToString[i] !== numToString[0]) state = false;
  }
  console.log(state);
  console.log(sum);
}
sameNums(2222222);
