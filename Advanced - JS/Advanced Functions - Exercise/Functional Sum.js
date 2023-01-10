function add(input) {
    let sum = input;
    
    let added = (b) => {
        sum += b
        return added;
    }

    added.toString = () => sum;
    return added;
}

console.log(add(1));

add(1)(6)(-3); 


/* function add(a) {
    let sum = a;
    function added(b) {
        sum += b;
        return added;
    }

    added.toString = function() {return sum };
    return added;
}
console.log(add(1));

add(1)(6)(-3); */