function houseParty(input) {

    let arr = input.slice();

    let arrL = arr.length;

    let result = [];

    for (let i = 0; i < arrL; i++) {
        let command = arr[i].split(" ");
        let name = command[0];

        if (command.length === 3) {
            if (result.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                result.push(name);
            }
        } else {
            if (!result.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = result.indexOf(name);
                result.splice(index, 1);
            }
        }

    }
    console.log(result.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']


)