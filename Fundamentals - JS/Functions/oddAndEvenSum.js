function oddAndEvenSum(input) {
    let oddSum = 0;
    let evenSum = 0;

    let inputToString = input.toString();
    let inputToStringL = inputToString.length;

    for (let i = 0; i < inputToStringL; i++) {
        let currentNum = Number(inputToString[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234);
