function specialNums(n) {
    
    let buffer = 0;
    
    for (let i = 1; i <= n; i ++) {
        let sum = i;
        
        while(buffer !== 0) {
            buffer = sum % 10;
            buffer = parseInt(buffer / 10);
        }
        
    }
    console.log(buffer);
    /*let sum = n;
    let buffer = 0;
    buffer = sum % 10;
    buffer = parseInt(buffer / 10);
    console.log(buffer);*/
}
specialNums(15);