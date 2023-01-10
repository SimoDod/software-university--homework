function facDivision(first, second) {
    let sumOfFirst = 1;
    let sumOfSecond = 1;

    for (let j = first; j > 0; j--) {
        sumOfFirst *= j;
    }

    for (let j = second; j > 0; j--) {
        sumOfSecond *= j;
    }
    
    let result = sumOfFirst / sumOfSecond;
    console.log(result.toFixed(2));
}
facDivision(5,
    2)