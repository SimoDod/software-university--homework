function addAndSubtract(myArr) {

    
    let sumOfOdd = 0;
    let sumOfEven = 0;
    let sumOfArr = 0;
    let arrayBuffer = myArr;

    for (let i = 0; i < myArr.length; i++) {

        sumOfArr += myArr[i];

        if (myArr[i] % 2 === 0) {
            sumOfEven += myArr[i] + i;
            arrayBuffer[i] = myArr[i] + i;
        } else {
            sumOfOdd += myArr[i] - i;
            arrayBuffer[i] = myArr[i] - i;
        }
    }

    console.log(arrayBuffer);
    console.log(sumOfArr);
    console.log(sumOfOdd + sumOfEven);
}
addAndSubtract([5, 15, 23, 56, 35]);