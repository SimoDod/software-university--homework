function getFibonator() {
    let firstNum = 0;
    let secNum = 1;

    return function () {
        let sum = firstNum + secNum;
        firstNum = secNum;
        secNum = sum;
        return firstNum;
    }
}


let fib = getFibonator();
console.log(fib()); // 1


/* function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init(); */