function buildWall(input) {
    let groupsWorkers = input.slice();
    let lowestNum = Math.min(...input);

    /* arr = [1, 2, 3, 4];
    new_arr = arr.map(a => a+1);
    console.log(new_arr); */
    let resultArr = [];
    let totalResult = 0;
    for (let i = lowestNum; i < 30; i++) {
        if (input.length > 2000) {
            return;
        }
        
        let hasNegative = input.some(v => v < 0);
        if (hasNegative) {
            return;
        }
        if (groupsWorkers.includes(30)) {
            let index = groupsWorkers.indexOf(30);
            groupsWorkers.splice(index, 1);

        }
        groupsWorkers = groupsWorkers.map(a => a + 1);

        let currentResult = groupsWorkers.length * 195;
        totalResult += currentResult
        resultArr.push(currentResult);
    }
    let endResult = Math.round(totalResult * 1900);
    console.log(resultArr.join(", "));
    console.log(`${endResult} pesos`);

}
buildWall([17, 22, 17, 19, 17]);