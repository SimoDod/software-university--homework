function maxSequence(myArr) {

    let inputL = myArr.length;

    let maxSeq = [];

    for (let i = 0; i < inputL; i++) {
        let currSeq = [];
        for (let j = i; j < inputL; j++) {

            if (myArr[i] === myArr[j]) {
                currSeq.push(myArr[i])
            } else {
                break;
            }
        }
        if (currSeq.length > maxSeq.length) {
            maxSeq = currSeq;
        }
    }
    console.log(maxSeq.join(' '));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])