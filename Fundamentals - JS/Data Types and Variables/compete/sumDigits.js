function sumDigits(n) {

    let nString = n.toString();
    let nSum = 0;
    
    for (let i = 0; i < nString.length; i++) {

        nSum += Number(nString[i]);

    }
    
    console.log(nSum);
}
sumDigits(245678)
