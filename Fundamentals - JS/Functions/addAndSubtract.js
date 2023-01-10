function addAndSubtract(first, second, third) {

    let addCurrent = add(first, second);
    let result = sub(addCurrent, third);


    function add(first, second) {
        return first + second;
    }

    function sub(addCurrent, thirdNumber) {
        return addCurrent - thirdNumber
    }
    return result;
}

console.log(addAndSubtract(23, 6, 10));