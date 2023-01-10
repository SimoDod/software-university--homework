function searchNumber(numbersArr, commandsArr) {
    let numberOfEleToTake = commandsArr.shift();
    let numbersOfEleToDelete = commandsArr.shift();
    let numberToSearch = commandsArr.shift();
    let counter = 0;

    let numbersToTake = numbersArr.slice().splice(0, numberOfEleToTake);
    numbersToTake.splice(0, numbersOfEleToDelete);
    let numbersToTakeL = numbersToTake.length;
    
    for (let i = 0; i < numbersToTakeL; i++) {

       /*  if (numbersToTake.includes(numberToSearch)) {
            counter++;
            
            
        } */

        if (numbersToTake[i] === numberToSearch) {
            counter++;
           
        }
    }
    
    console.log(`Number ${numberToSearch} occurs ${counter} times.`);
}
searchNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
)