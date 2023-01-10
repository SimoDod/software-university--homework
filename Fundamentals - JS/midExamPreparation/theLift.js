function treasureHunt(input) {
    let inventory = input.shift().split('|')

    let resultArr = [];
    let index = 0;
    let totalResultOfItems = 0;

    while (input[index] !== 'Yohoho!') {
        let currentItemArr = input[index].split(' ');
        let command = currentItemArr.shift();
        
        switch (command) {
            case "Loot":
                for (const el of currentItemArr) {

                    if (inventory.includes(el)) {

                    } else {
                        inventory.unshift(el)
                    }
                }

                break;
            case "Drop":
                let numItem = Number(currentItemArr)
                if (numItem < 0) {
                    index++;
                    continue;
                } else {
                    let itemHold = inventory.splice(currentItemArr, 1);
                    inventory.push(...itemHold);
                }

                break;
            case "Steal":
                for (let i = 0; i < currentItemArr; i++) {
                    resultArr.unshift(inventory.pop());
                }
                console.log(resultArr.join(", "));
                break;
            default:
                break;
        }
        index++;
    }
    for (const el of inventory) {
        totalResultOfItems += el.length;
    }

    let finalResult = totalResultOfItems / inventory.length;

    if (inventory.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${finalResult.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])



