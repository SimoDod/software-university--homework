function coffeeLover(input) {
    let coffeeOnStock = input.shift().split(' ')
    let countOfCommands = input.shift();
    countOfCommands = Number(countOfCommands);

    for (let i = 0; i < countOfCommands; i++) {
        let commandLine = input[i].split(' ')
        let command = commandLine[0]


        switch (command) {
            case 'Include':
                let includeCommand = commandLine[1];
                coffeeOnStock.push(includeCommand)
                break;
            case 'Remove':
                let removeCommand = commandLine[1];
                let countToRemove = Number(commandLine[2])
                if (countToRemove > coffeeOnStock.length) {
                    continue;
                }
                if (removeCommand === 'first') {
                    coffeeOnStock.splice(0, countToRemove)
                } else if (removeCommand === 'last') {
                    coffeeOnStock.splice(-countToRemove)
                }
                break;
            case 'Prefer':
                let prefIndex1 = Number(commandLine[1]);
                let prefIndex2 = Number(commandLine[2]);

                if (coffeeOnStock[prefIndex1] === undefined
                    || coffeeOnStock[prefIndex2] === undefined) {
                    continue;
                } else {
                    const tmp = coffeeOnStock[prefIndex1]
                    coffeeOnStock[prefIndex1] = coffeeOnStock[prefIndex2]
                    coffeeOnStock[prefIndex2] = tmp;
                }

                break;
            case 'Reverse':
                coffeeOnStock.reverse();
                break;
            default:
                break;
        }
    }

    console.log('Coffees:');
    console.log(coffeeOnStock.join(' '));
}
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])


