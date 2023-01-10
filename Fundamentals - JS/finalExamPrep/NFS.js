function NFS(data) {
    let carsCount = data.shift();

    let carsInfo = {};

    for (let i = 0; i < carsCount; i++) {
        let tokens = data[i].split('|');
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);
        carsInfo[tokens[0]] = { mileage, fuel };

    };

    let index = carsCount;

    while (data[index] !== 'Stop') {
        let commandsLine = data[index].split(' : ');
        let command = commandsLine[0];
        let carName = commandsLine[1];
        let distance = Number(commandsLine[2]);
        let fuel = Number(commandsLine[3]);

        //'Drive : Audi A6 : 543 : 47',
        switch (command) {
            case 'Drive':
                let target = carsInfo[carName].fuel - fuel;

                if (target >= 0) {
                    carsInfo[carName].fuel = carsInfo[carName].fuel - fuel;
                    carsInfo[carName].mileage = carsInfo[carName].mileage + distance;
                    console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                } else {
                    console.log("Not enough fuel to make that ride");
                }

                if (carsInfo[carName].mileage >= 100000) {
                    console.log(`Time to sell the ${carName}!`);
                    delete carsInfo[carName];
                }

                break;

            case 'Refuel':
                let fuelRefuel = Number(commandsLine[2]);

                let maxCapacityFuel = 75;
                let currCarFuel = carsInfo[carName].fuel;

                let fuelRefuelIfMore75 = maxCapacityFuel - currCarFuel;

                let result = currCarFuel + fuelRefuel

                if (result > maxCapacityFuel) {
                    carsInfo[carName].fuel = maxCapacityFuel;
                    console.log(`${carName} refueled with ${fuelRefuelIfMore75} liters`)
                } else {
                    carsInfo[carName].fuel = carsInfo[carName].fuel + fuelRefuel;
                    console.log(`${carName} refueled with ${fuelRefuel} liters`);
                }
                break;

            case 'Revert':
                let mileageMin = 10000; // minimum mileage to revert to;
                let currMileage = carsInfo[carName].mileage;
                let revertTarget = currMileage - distance;


                if (revertTarget > mileageMin) {
                    carsInfo[carName].mileage = carsInfo[carName].mileage - distance;
                    console.log(`${carName} mileage decreased by ${distance} kilometers`);
                } else {
                    carsInfo[carName].mileage = mileageMin;
                }

                break;

            default:
                break;
        }

        index++;
    }

    for (const key in carsInfo) {
        console.log(`${key} -> Mileage: ${carsInfo[key].mileage} kms, Fuel in the tank: ${carsInfo[key].fuel} lt.`);
    }
}
NFS([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)