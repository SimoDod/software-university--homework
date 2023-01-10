function sortNumbers(first, middle, last) {

    let array = [first, middle, last];

    array.sort((a,b)=>b-a);

    for (let i = 0; 3 > i; i++) {
        
        console.log(array[i]);
    }

}
sortNumbers(2, 1, 3);