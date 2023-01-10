function extractBiggerNums(array) {
  let res = [];
  let currBiggestNum = 0;
  array.forEach((element) => {
    if (currBiggestNum <= element) {
      currBiggestNum = element;
      res.push(currBiggestNum);
    }
  });
  return res;
}

extractBiggerNums([1, 3, 8, 4, 10, 12, 3, 2, 24]);
