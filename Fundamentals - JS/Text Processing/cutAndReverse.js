function cutAndReverse(input) {
    
    let reversed = input.split('').reverse().join('');

    let toMid = reversed.length / 2;
    let firstPart = reversed.slice(toMid)
    let lastPart = reversed.slice(0, toMid)

    console.log(firstPart);
    console.log(lastPart);
};
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')