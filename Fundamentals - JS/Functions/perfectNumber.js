function perfNum(input) {
    
    let sum = 1;

    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            sum += i;
        }
    }

    let result = (sum === input) ? 
    `We have a perfect number!` : `It's not so perfect.`
    console.log(result);
}
perfNum(28)