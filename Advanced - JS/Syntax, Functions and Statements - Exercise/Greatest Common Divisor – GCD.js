function GCD(x, y) {
  let res;

  for (let i = 1; i <= x && i <= y; i++) {
    if (x % i === 0 && y % i === 0) {
      res = i;
    }
  }

  console.log(res);
}
GCD(15, 5);
