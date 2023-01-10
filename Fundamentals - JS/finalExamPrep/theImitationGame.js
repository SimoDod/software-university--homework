function theImitationGame(data) {
    let password = data.shift();


    let index = 0;

    while (data[index] !== 'Decode') {
        let tokens = data[index].split('|');
        let command = tokens[0];

        switch (command) {
            case 'Move':
                let moveFirstLetters = Number(tokens[1]);
                let lettersToMove = password.substr(0,moveFirstLetters);

                let newMovePassword = password.replace(lettersToMove, '');

                newMovePassword = newMovePassword + lettersToMove;

                password = newMovePassword;

                break;

            case 'Insert':
                let insertIndex = Number(tokens[1]);
                let insertValue = tokens[2];

                let part1 = password.substr(0, insertIndex);
                let part2 = password.substr(insertIndex);

                let result = part1 + insertValue + part2;

                password = result;

                break;

            case 'ChangeAll':
                let substring = tokens[1];
                let replacement = tokens[2];

                let res = password.split(substring).join(replacement);

                password = res;
                break;

            default:
                break;
        }
        index++;
    }

    console.log(`The decrypted message is: ${password}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)