function train(arr) {
    let wagonArr = arr.slice();
    let currentWagon = wagonArr.shift().split(" ").map(Number);
    let maxCapacity = +wagonArr.shift();
    let wagonArrL = wagonArr.length;
    let currentWagonL = currentWagon.length;




    for (let i = 0; i < wagonArrL; i++) {

        let commandNum = wagonArr[i].split(' ')

        if (commandNum[0] === "Add") {
            currentWagon.push(Number(commandNum[1]))
        } else {

            for (let j = 0; j < currentWagonL; j++) {
                if (Number(wagonArr[i]) + currentWagon[j] <= maxCapacity) {
                    currentWagon[j] += Number(wagonArr[i]);
                    break;
                } 
            }
        }
    }
    console.log(currentWagon.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])