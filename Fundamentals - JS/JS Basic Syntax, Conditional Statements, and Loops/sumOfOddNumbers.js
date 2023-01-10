function solve(n) {

    let oddNum = -1;
    let sum = 0;
    let i = 1;
    
    while (n >= i) {
        i++;
        
        oddNum += 2;

        sum += oddNum;

        console.log(oddNum);
        
    }
    
    console.log("Sum: " + sum);
    
}
solve(5);