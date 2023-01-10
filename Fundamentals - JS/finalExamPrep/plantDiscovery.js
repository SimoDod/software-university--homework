function plantDiscovery(input) {
    let shadowCopy = input.slice();
    let countToDisc = input.shift();

    let mapResult = new Map();
    let rating = 0;

    for (let i = 0; i < countToDisc; i++) {
        if (shadowCopy[i + 1] === 'Exhibition') {
            break;
        }

        const element = input.shift().split('<->');

        let rarityAndRatingArr = (element[1] + '|' + rating).split('|').map(Number);

        mapResult.set(element[0], rarityAndRatingArr);
    };

    let index = 0;

    while (input[index] !== 'Exhibition') {
        if (input[index] === undefined) {
            break;
        }

        let tokens = input[index].split(' ');
        let command = tokens[0];
        let plantName = tokens[1];


        switch (command) {
            case 'Rate:':

                if (mapResult.has(plantName)) {
                    let plantRating = Number(tokens[3]);
                    let temp = mapResult.get(plantName);
                        
                       temp = temp.concat(plantRating);
                    
                    
                    mapResult.set(plantName, temp);
                } else {
                    console.log('error');
                }

                break;
            case 'Update:':

                if (mapResult.has(plantName)) {
                    let newRating = Number(tokens[3]);
                    let tempArr = mapResult.get(plantName);
                    tempArr[0] = newRating;
                    mapResult.set(plantName, tempArr)
                } else {
                    console.log('error');
                }

                break;
            case 'Reset:':

                if (mapResult.has(plantName)) {

                    let tempRarity = mapResult.get(plantName);
                    
                    tempRarity = tempRarity[0];

                    
                    mapResult.set(plantName, [tempRarity, 0]);

                } else {
                    console.log('error');
                }
                break;

            default:
                break;
        };

        index++;
    };

    console.log('Plants for the exhibition:');

    for (const plant of mapResult) {
        let plantName = plant[0];
        let rarityArr = plant[1];

        let typeOfEl = typeof rarityArr
        let counter = 0;
        let temp = 0;
        let isTrue = true;

        if (typeOfEl === 'object') {

            for (let j = 1; j < rarityArr.length; j++) {
                if (rarityArr[j] > 0) {
                    counter++;
                    temp += Number(rarityArr[j]);
                    temp = temp / counter
                };
            };

        } else {

            isTrue = false;
            console.log(`- ${plantName}; Rarity: ${rarityArr}; Rating: ${temp.toFixed(2)}`);

        };

        if (isTrue) {
            console.log(`- ${plantName}; Rarity: ${rarityArr[0]}; Rating: ${temp.toFixed(2)}`);
        };
    };
};
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Reset: Arnoldii",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Exhibition"])



