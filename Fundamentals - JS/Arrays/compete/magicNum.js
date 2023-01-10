function magicNum(myArr, n) {
    
    let myArrL = myArr.length
    
    for (let i = 0; i < myArrL; i++) {

        for (let j = i + 1; j < myArrL; j++) {

            if (myArr[i] + myArr[j] === n) {
                console.log(myArr[i], myArr[j]);
            }
        }
    }
}
magicNum([1, 2, 3, 4, 5, 6],
    6)