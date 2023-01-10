function magicMatrix(matrix) {
  let res = [];

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    let columnSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      const element = matrix[i][j];
      rowSum += element;
    }

    for (let k = 0; k < matrix[i].length; k++) {
      const element = matrix[k][i];
      columnSum += element;
    }
    rowSum === columnSum ? res.push(true) : res.push(false);
  }

  let checker = (x) => x === true;

  console.log(res.some(checker));
}

magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
