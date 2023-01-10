function equalSum(myArr) {

    let output = "no";

    let inputL = myArr.length;

    let isTrue = true;

    for (let i = 0; i < inputL; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += myArr[l];
        }
        for (let r = i + 1; r < inputL; r++) {
            rightSum += myArr[r]
        }

        if (leftSum === rightSum) {
            output = i;
        }
    }
    console.log(output);

}
equalSum([1])