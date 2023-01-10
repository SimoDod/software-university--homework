function activationKeys(data) {
    let rawAK = data.shift();

    let index = 0;

    while (data[index] !== 'Generate') {
        let tokens = data[index].split('>>>');
        let command = tokens[0];


        switch (command) {
            case 'Contains':
                let containsSubstring = tokens[1];

                if (rawAK.includes(containsSubstring)) {
                    console.log(`${rawAK} contains ${containsSubstring}`);
                } else {
                    console.log("Substring not found!");
                }
                break;

            case 'Flip':
                let flipUpperOrLower = tokens[1];
                let flipStartIndex = Number(tokens[2]);
                let flipStopIndex = Number(tokens[3]);
                let toCut = flipStopIndex - flipStartIndex;

                let res = rawAK.substr(flipStartIndex, toCut);

                if (flipUpperOrLower === 'Upper') {
                    rawAK = rawAK.replace(res, res.toUpperCase());
                } else if (flipUpperOrLower === 'Lower') {
                    rawAK = rawAK.replace(res, res.toLowerCase());
                }
                console.log(rawAK);
                break;

            case 'Slice':
                let sliceStartIndex = Number(tokens[1]);
                let sliceStopIndex = Number(tokens[2]);


                let part1 = rawAK.substr(0, sliceStartIndex);
                let part2 = rawAK.substr(sliceStopIndex);

                rawAK = part1 + part2;
                console.log(rawAK);

                break;

            default:
                break;
        }
        index++;
    }
    console.log(`Your activation key is: ${rawAK}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
