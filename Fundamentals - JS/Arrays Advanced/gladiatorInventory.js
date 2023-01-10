function gladiatorInventory(input) {

    let inventory = input.slice(0, 1).join(' ').split(' ');
    
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ')[0];
        let item = input[i].split(' ')[1];

        switch (command) {
            case "Buy":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Trash":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item)
                    inventory.splice(index, 1);
                }
                break;
            case "Repair":
                if (inventory.includes(item)) {
                    let indexOfItem = inventory.indexOf(item);
                    let toShift = inventory.splice(indexOfItem, 1);
                    inventory.push(...toShift)
                }
                break;
            case "Upgrade":
                let itemCheck = item.split('-');

                if (inventory.includes(itemCheck[0])) {
                    let indexOfUpgrade = inventory.indexOf(itemCheck[0]);
                    inventory.splice(indexOfUpgrade + 1, 0, item)
                }
                break;
            default:
                break;
        }

    }
    console.log(inventory.join(' ').replace('-',':'));
}
gladiatorInventory(['Spear Spear Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel', 
    'Upgrade SWORD-Steel']
)
console.log('-----------');

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']

)
