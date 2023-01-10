function amazingNumbers(num) {
    
let numString = num.toString();
let sum = 0;

for (let i = 0; i < numString.length; i++) {
sum += Number(numString[i]);
}

let isAmazing = false;
sum = sum.toString();

for (let i = 0; i < sum.length; i++) {
    if (sum[i] === "9") {
        isAmazing = true;
        break;
    }
}

if (isAmazing) {
    console.log(`${num} Amazing? True`);
} else {
    console.log(`${num} Amazing? F alse`);
}

}
amazingNumbers(999);