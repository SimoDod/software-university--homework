function passwordReset(data) {

    let predefinedString = data.shift();

    let dataL = data.length;

    for (let i = 0; i < dataL; i++) {
        if (data[i] === 'Done') {
            break;
        };

        let tokens = data[i].split(' ');
        let command = tokens[0];

        switch (command) {
            case 'TakeOdd':
                let buffer = "";

                for (let j = 1; j < predefinedString.length; j += 2) {
                    buffer += predefinedString[j];
                }
                predefinedString = buffer;
                console.log(buffer);
                break;

            case 'Cut':
                let indexOfCut = Number(tokens[1]);
                let lengthOfCut = Number(tokens[2]);
                let endOfCut = indexOfCut + lengthOfCut

                let firstPart = predefinedString.substring(0, indexOfCut);

                let secondPart = predefinedString.substring(endOfCut,);
                predefinedString = firstPart + secondPart;

                console.log(predefinedString);

                break;

            case 'Substitute':
                let toBeReplaced = tokens[1];
                let toReplaceWith = tokens[2];

                if (predefinedString.includes(toBeReplaced)) {
                    let substitute = predefinedString.split(toBeReplaced).join(toReplaceWith);
                    predefinedString = substitute
                    console.log(predefinedString);
                } else {
                    console.log('Nothing to replace!');
                };
                break;

            default:
                break;
        };

    };

    console.log(`Your password is: ${predefinedString}`);
};
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
