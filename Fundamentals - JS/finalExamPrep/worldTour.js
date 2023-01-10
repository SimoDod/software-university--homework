function worldTour(line) {
    let result = line.shift()
    let index = 0;

    while (line[index] !== 'Travel') {
        let command = line[index].split(":")
        let currCommand = command[0];


        switch (currCommand) {
            case 'Add Stop':
                let firstParamIndex = Number(command[1]);
                let secondParamString = command[2];

                if (result[firstParamIndex] !== undefined) {
                    let firstPart = result.slice(0, firstParamIndex);
                    let lastPart = result.slice(firstParamIndex);

                    console.log(`${firstPart}${secondParamString}${lastPart}`);
                    result = `${firstPart}${secondParamString}${lastPart}`
                } else {
                    console.log(result);
                }
                break;

            case 'Remove Stop':
                let firstIndex = Number(command[1]);
                let secondIndex = Number(command[2]);

                if (result[firstIndex] !== undefined && result[secondIndex] !== undefined) {
                    let removed = result.slice(firstIndex, secondIndex + 1);

                    let state = result.split(removed).join('');

                    console.log(state);

                    result = state;
                } else {
                    console.log(result);
                }
                break;
            case 'Switch':
                let oldString = command[1];
                let newString = command[2];

                let switched = result.split(oldString).join(newString);

                console.log(switched);

                result = switched;
                break;
            default:
                break;
        }

        index++;
    }

    console.log(`Ready for world tour! Planned stops: ${result}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
