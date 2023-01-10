function maxNum(myArr) {

    let myArrL = myArr.length;
    let newArr = [];
    

    for (let i = 0; i < myArrL; i++) {

        let num1 = myArr[i];
        isBigger = true;

        for (let j = i + 1; j < myArrL; j++) {
            let num2 = myArr[j]

            if (num1 <= num2) {
                isBigger = false;
            }
        }
        if (isBigger) {
            newArr.push(num1)
        }
    }
    console.log(newArr.join(' '));
}
maxNum([1, 4, 3, 2])