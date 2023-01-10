function commonEle(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {

        for (let j = 0; j < secondArr.length; j++) {

            if (firstArr[i] === secondArr[j]) {
                console.log(secondArr[j]);
            }

        }
    }
}
commonEle(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])