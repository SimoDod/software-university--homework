function solve(myArr) {
    let result = [];

    for (const el of myArr) {
        result.push(el)
    }
    
    while (result.length > 1) {
        let tempArr = [];
        
        for (let i = 0; i < result.length - 1; i++) {
            tempArr[i] = result[i] + result[i + 1]

        }
        result = tempArr;
    }


    console.log(result.join(""));
}
solve([5, 0, 4, 1, 2])