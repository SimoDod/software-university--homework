function manOwar(input) {
    let pirateShipHealth = input.shift().split('>').map(Number);
    let warShipHealth = input.shift().split('>').map(Number);
    let maximumHealth = input.shift()
    maximumHealth = Number(maximumHealth)
    let index = 0;
    let isSunken = false;
    
    while (input[index] !== 'Retire') {
        let commandsLine = input[index].split(' ');
        let command = commandsLine.shift();

        switch (command) {
            case 'Fire':
                let fireIndex = Number(commandsLine[0]);
                let fireAttackDmg = Number(commandsLine[1]);

                if (warShipHealth[fireIndex] === undefined) {
                    index++;
                    continue;

                } else {
                    warShipHealth[fireIndex] -= fireAttackDmg;
                    if (warShipHealth[fireIndex] <= 0) {
                        isSunken = true;
                        return console.log("You won! The enemy ship has sunken.");
                    }
                }

                break;
            case 'Defend':
                let defendIndexStart = Number(commandsLine[0]);
                let defendIndexStop = Number(commandsLine[1]);
                let defendAttackDmg = Number(commandsLine[2]);

                if (pirateShipHealth[defendIndexStart] === undefined
                    || pirateShipHealth[defendIndexStop] === undefined) {
                    index++;
                    continue;
                } else {
                    for (let defIndex = defendIndexStart; defIndex <= defendIndexStop; defIndex++) {
                        pirateShipHealth[defIndex] -= defendAttackDmg;

                        if (pirateShipHealth[defIndex] <= 0) {
                            isSunken = true;
                            return console.log("You lost! The pirate ship has sunken.");;
                        }
                    }

                }
                break;

            case 'Repair':
                let repairIndex = Number(commandsLine[0]);
                let repairHealth = Number(commandsLine[1]);

                let healthRepaired = pirateShipHealth[repairIndex] + repairHealth;
                
                if(pirateShipHealth[repairIndex] === undefined) {
                    index++;
                    continue;
                } else {
                    
                    pirateShipHealth[repairIndex] += repairHealth;
                    
                    if (healthRepaired > maximumHealth) {
                        pirateShipHealth[repairIndex] = maximumHealth;
                    } else {
                        
                    }
                }
                break;
            case 'Status':
                let statusCounter = 0;
                let repairNeededPercent = maximumHealth * 0.2;
                for (const el of pirateShipHealth) {
                    if (el < repairNeededPercent) {
                        statusCounter++;
                    }
                }
                console.log(`${statusCounter} sections need repair.`);
                break;
            default:
                break;
        }
        index++;
    }

    const warShipSum = warShipHealth.reduce((partialSum, a) => partialSum + a, 0);
    const pirateShipSum = pirateShipHealth.reduce((partialSum, a) => partialSum + a, 0);
    
    if(!isSunken) {
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }
}
manOwar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
    console.log('---------------');
    manOwar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])