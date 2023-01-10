function nthEl(arr, step) {
    let res = [];
    for (let index = 0; index < arr.length; index += step) {
        res.push(arr[index]);
    }
    return res;
}