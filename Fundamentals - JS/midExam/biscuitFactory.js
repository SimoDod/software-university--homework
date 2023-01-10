function biscFactory(input) {
    let biscPerDayPerWorker = Number(input[0]);
    let countOfWorkers = Number(input[1]);
    let enemyFactoryProduced = Number(input[2]);
    let ourFactoryResult = 0;
    let counter = 0;

    for (let i = 1; i <= 30; i++) {
        counter++;

        if(counter % 3 === 0) {
            let currentResult = (countOfWorkers * biscPerDayPerWorker) * 0.75;
            ourFactoryResult += Math.floor(currentResult);
            counter = 0;
        } else {
            ourFactoryResult += countOfWorkers * biscPerDayPerWorker;
        }
        
    }
    console.log(`You have produced ${ourFactoryResult} biscuits for the past month.`);
    
    let result = ((ourFactoryResult / enemyFactoryProduced) - 1) * 100;
    
    if (ourFactoryResult > enemyFactoryProduced) {
        console.log(`You produce ${result.toFixed(2)} percent more biscuits.`);
    } else {
        result = Math.abs(result);
        console.log(`You produce ${result.toFixed(2)} percent less biscuits.`);
    }
}
biscFactory(["163",
"16",
"67020"])





