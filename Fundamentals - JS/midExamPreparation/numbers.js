function numbers(input) {
    let inputArr = input.split(' ');
    let inputArrNums = inputArr.map(Number)

    const average = (inputArrNums) => inputArrNums.reduce((a, b) => a + b) / inputArrNums.length;
    let avg = average(inputArrNums)
    let resultArr = [];
    let sortedArr = inputArrNums.sort((a, b) => b - a);


    for (let i = 0; i < sortedArr.length && i < 5; i++) {
        if (sortedArr[i] > avg) {
            resultArr.push(sortedArr[i])
        }


    }

    if (resultArr <= 1) {
        console.log('No');
    } else {
        console.log(resultArr.join(' '));
    }
}
numbers('10 20 30 40 50 -11 -2 -1 10 1 1 1')
numbers('2 2 2 2 2 2')