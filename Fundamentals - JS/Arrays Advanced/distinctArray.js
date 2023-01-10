function distinctArr(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(" "));
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])