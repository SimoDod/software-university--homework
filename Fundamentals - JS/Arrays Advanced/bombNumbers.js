function bombNumbers(numbers, bomb) {

    let numbersL = numbers.length;
    let bombNum = bomb.shift();
    let bombPower = bomb.shift();
    let bombPowerL = bombPower * 2 + 1;

    let result = 0;
    
    for (let i = 0; i < numbersL; i++) {

        if (numbers[i] === bombNum) {

            if(i + 1 < bombPower) {
                numbers.splice(0, bombPowerL - (bombPower - i))
            } else {
                numbers.splice(i - bombPower, bombPowerL)
            }
           
        }
    }
    for (let el of numbers) {
        result += el;
    }
    console.log(result);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    

)
console.log('----------');
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)
console.log('----------');
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)
console.log('----------');
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
)
