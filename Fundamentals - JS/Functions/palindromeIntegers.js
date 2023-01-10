function palindrome(arr) {
    
    for (const el of arr) {
        let current = String(el);
        let currentReversed = String(el).split('').reverse().join('');
        
        if (current === currentReversed) {
            console.log(true);
        } else {
            console.log(false);
        }
       
    }
}
palindrome([123,323,421,121]);