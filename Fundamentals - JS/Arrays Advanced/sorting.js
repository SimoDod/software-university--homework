function sorting(input) {
    let arrFromBiggest = input.slice().sort((a, b) => b - a);

    let arrFromSmallest = input.slice().sort((a, b) => a - b);


    let resultArr = [];

    for (let i = 0; i < input.length; i++) {
        if (resultArr.length == input.length) {
            break;
        }

        resultArr.push(arrFromBiggest[i]);
        resultArr.push(arrFromSmallest[i]);
    }
    
    if (input.length % 2 === 0) {
        console.log(resultArr.join(' '));
    } else {
        let result = resultArr.slice(0, input.length);
        console.log(result.join(" "));
    }

}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, 100])