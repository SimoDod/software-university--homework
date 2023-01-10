function charactersInRange(firstChar, SecondChar) {
    let firstCharToNum = firstChar.charCodeAt(0);
    let secondCharToNum = SecondChar.charCodeAt(0) 
    let arr = [];

    if (secondCharToNum < firstCharToNum) {
        for (let i = secondCharToNum + 1; i < firstCharToNum; i++) {
            let currentNumToChar = String.fromCharCode(i)
            arr.push(currentNumToChar);
        }
    } else {
        for (let i = firstCharToNum + 1; i < secondCharToNum; i++) {
            let currentNumToChar = String.fromCharCode(i)
            arr.push(currentNumToChar);
        }
    }

    return arr.join(' ');
}
console.log(charactersInRange('C', '#'));