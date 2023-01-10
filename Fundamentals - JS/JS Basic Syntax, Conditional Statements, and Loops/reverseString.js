function reverseString(someString) {

    let buffer = "";
    for (let i = someString.length - 1; i >= 0; i--) {
        buffer += someString[i];
        
    }
    console.log(buffer);
    
}
reverseString('Hello')