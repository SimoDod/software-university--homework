function rounding(num, numLength) {

    let x = num;
    
    if (numLength >= 15) {
        x = x.toFixed(15);
        console.log(parseFloat(x));
    } else {
        x = (x).toFixed(numLength);
        console.log(parseFloat(x));
    }
}
rounding(10.5,4);
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);