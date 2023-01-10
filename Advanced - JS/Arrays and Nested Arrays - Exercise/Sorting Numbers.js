function sortingNumbers(params) {
    let sortedNums = params.sort((a, b) => a - b);
    let res = [];

    for (let i = 0, y = sortedNums.length - 1; i < sortedNums.length
        && y > 0; i++, y--) {

        res.push(sortedNums[i]);
        res.push(sortedNums[y]);

        let evenOddChecker = params.length % 2 === 0 ? 0 : 1

        if (res.length === params.length + evenOddChecker) {
            if (evenOddChecker === 1) res.pop();
            return res;
        }
    };
}