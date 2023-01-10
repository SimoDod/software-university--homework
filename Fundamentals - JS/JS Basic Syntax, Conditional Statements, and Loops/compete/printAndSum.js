function printAndSum(num1, num2) {


    let buffer = 0;
    let stringBuffer = "";
    
    for (let i = num1; i < num2; i++) {
        buffer += i;
        stringBuffer += i + " ";
        
    }
    console.log(`${stringBuffer}${num2}`)
    console.log(`Sum: ${buffer + num2}`);
}
printAndSum(5, 10)