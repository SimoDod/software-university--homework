function pirates(data) {

    let settlements = {};
    let isSettlementsToGo = false;
    let i = 0;

    while (data[i] !== 'Sail') {
        let [town, citizens, gold] = data[i].split('||');
        citizens = Number(citizens);
        gold = Number(gold);

        if (settlements.hasOwnProperty(town)) {
            settlements[town].citizens += citizens;
            settlements[town].gold += gold;
        } else {
            settlements[town] = { citizens, gold };
        }
        i++;
        isSettlementsToGo = true;
    }

    i++

    for (let index = i; index < data.length; index++) {
        if (data[index] === 'End') break;
        let command = data[index].split('=>').shift();

        if (command === 'Plunder') {
            let commandLine = data[index].split('=>');
            let target = commandLine[1];
            let citizensKill = Number(commandLine[2]);
            let goldToPlunder = Number(commandLine[3]);

            if (settlements.hasOwnProperty(target)) {

                settlements[target].citizens -= citizensKill;
                settlements[target].gold -= goldToPlunder;

                let citizensAmountTest = settlements[target].citizens;
                let goldAmountTest = settlements[target].gold;

                console.log(`${target} plundered! ${goldToPlunder} gold stolen, ${citizensKill} citizens killed.`);

                if (citizensAmountTest <= 0 || goldAmountTest <= 0) {
                    console.log(`${target} has been wiped off the map!`);
                    delete settlements[target];
                };
            };

        } else if (command === 'Prosper') {
            let commandLine = data[index].split('=>');
            let target = commandLine[1];
            let goldToProsper = Number(commandLine[2]);

            if (settlements.hasOwnProperty(target)) {

                if (goldToProsper <= 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    settlements[target].gold += goldToProsper;
                    let amountHave = settlements[target].gold;
                    console.log(`${goldToProsper} gold added to the city treasury. ${target} now has ${amountHave} gold.`);
                };
            };
        };
    };

    let size = Object.keys(settlements).length;


    if (size <= 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${size} wealthy settlements to go to:`);
    }

    for (const key in settlements) {
        let gold = settlements[key].gold;
        let citizens = settlements[key].citizens;

        console.log(`${key} -> Population: ${citizens} citizens, Gold: ${gold} kg`);

    };
};
pirates([
    "Sail",
    "Plunder=>Tortuga=>75000=>380000",
    "Prosper=>Santo Domingo=>180",
    "End"])
