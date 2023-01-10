function arrayManipulator(arrayOfIntegers, commands) {

    let sumOfPairsArr = [];
    let sumOfPairsTrue = false;

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ')
        let currentCommand = command.shift();

        switch (currentCommand) {
            case "add":
                let index = command.shift();
                let element = command.shift();
                arrayOfIntegers.splice(index, 0, Number(element))

                break;
            case "addMany":
                let addManyIndex = command.shift();
                let buffer = []
                for (let el of command) {
                    buffer.push(Number(el))
                }
                arrayOfIntegers.splice(addManyIndex, 0, ...buffer)
                break;

            case "contains":
                let containsIndex = command.shift();

                if (arrayOfIntegers.includes(Number(containsIndex))) {
                    console.log(arrayOfIntegers.indexOf(Number(containsIndex)));
                } else {
                    console.log(arrayOfIntegers.indexOf(Number(containsIndex)));
                }

                break;
            case "remove":
                let removeIndex = command.shift();
                arrayOfIntegers.splice(removeIndex, 1)
                break;

            case "shift":
                let shiftIndex = command.shift();

                for (let i = 0; i < shiftIndex; i++) {
                    let buffer = arrayOfIntegers.shift()
                    arrayOfIntegers.push(buffer);
                }
                break;

            case "sumPairs":
                if (arrayOfIntegers.length % 2 !== 0) {
                    arrayOfIntegers.push(0);

                }
                for (let i = 0; i < arrayOfIntegers.length - 1 ; i++) {
                    let sumOfPairs = arrayOfIntegers[i] + arrayOfIntegers[i + 1];
                    sumOfPairsArr.push(sumOfPairs)
                    i++;

                }
                sumOfPairsTrue = true;
                break;

            case "print":
                if (sumOfPairsTrue) {
                    console.log(`[ ${sumOfPairsArr.join(', ')} ]`);
                } else {
                    console.log(`[ ${arrayOfIntegers.join(', ')} ]`);
                }
                break;
            default:
                break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)
console.log('----------------');
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']

)