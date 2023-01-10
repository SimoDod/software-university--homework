function decryptingCommands(data) {
    let messageToDecrypt = data.shift();

    let i = 0;

    while (data[i] !== 'Finish') {
        if(messageToDecrypt === 'Finish') break; 
        
        let commandLine = data[i].split(' ');
        let command = commandLine[0];

        switch (command) {
            case 'Replace':
                let currentChar = commandLine[1];
                let newChar = commandLine[2];
                let newReplaceString = messageToDecrypt.split(currentChar).join(newChar);
                messageToDecrypt = newReplaceString;
                console.log(messageToDecrypt);

                break;

            case 'Cut':
                let startCutIndex = Number(commandLine[1]);
                let endCutIndex = Number(commandLine[2]);

                if (messageToDecrypt[startCutIndex] === undefined || messageToDecrypt[endCutIndex] === undefined) {
                    console.log("Invalid indices!");
                } else {
                    let toReplace = messageToDecrypt.substr(startCutIndex, endCutIndex)
                    let newCut = messageToDecrypt.replace(toReplace, '');
                    messageToDecrypt = newCut;
                    console.log(messageToDecrypt); 
                }
                break;

            case 'Make':
                let upperOrLower = commandLine[1];

                if (upperOrLower === 'Upper') {
                    messageToDecrypt = messageToDecrypt.toUpperCase();
                    console.log(messageToDecrypt);
                } else if (upperOrLower === 'Lower') {
                    messageToDecrypt = messageToDecrypt.toLowerCase();
                    console.log(messageToDecrypt);
                }
                break;

            case 'Check':
                let checkString = commandLine[1];

                if (messageToDecrypt.includes(checkString)) {
                    console.log(`Message contains ${checkString}`);
                } else {
                    console.log(`Message doesn't contain ${checkString}`);
                }
                break;

            case 'Sum':
                let sumStartIndex = Number(commandLine[1]);
                let sumEndIndex = Number(commandLine[2]);

                if (messageToDecrypt[sumStartIndex] === undefined || messageToDecrypt[sumEndIndex] === undefined) {
                    console.log(`Invalid indices!`);
                } else {
                    let substring = messageToDecrypt.substr(sumStartIndex, sumEndIndex)
                    let sum = 0;

                    for (const el of substring) {
                        sum += el.charCodeAt();
                    }
                    console.log(sum);
                }
                break;

            default:
                break;
        };

        i++;
    };
};
decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4", // welikesoftuni
    
    "Finish"])


