function mergeArr(firstArr, secondArr) {

    let thirdArr = [];
    //let buff = '';

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            thirdArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            thirdArr[i] = firstArr[i] + secondArr[i];
        }

        /*if (i === firstArr.length - 1) {
            buff += thirdArr[i];
        } else {
            buff += thirdArr[i] + ' - ';
        }*/

    }

    console.log(thirdArr.join(" - "));

}
mergeArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])