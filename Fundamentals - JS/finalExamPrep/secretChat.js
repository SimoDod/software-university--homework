function secretChat(data) {
    let concealedMessage = data.shift();

    let index = 0;

    while (data[index] !== 'Reveal') {
        if(concealedMessage === 'Reveal') {
            break;
        }
        
        let tokens = data[index].split(':|:');
        let command = tokens[0];
        
        switch (command) {
            case 'InsertSpace':
                let indexOfInsertSpace = Number(tokens[1]);
                
                let firstPart = concealedMessage.substring(0, indexOfInsertSpace);
                let secondPart = concealedMessage.substring(indexOfInsertSpace);
                
                let result = firstPart + ' ' + secondPart;
                console.log(result);
                concealedMessage = result;
                break;

            case 'Reverse':
                let substringOfReverse = tokens[1];
                
                if(concealedMessage.includes(substringOfReverse)) {
                    let reversed = substringOfReverse.split('').reverse().join('')
                    let indexOfReverse = concealedMessage.indexOf(substringOfReverse);
                    let ReverseL = substringOfReverse.length;
                    
                    let firstP = concealedMessage.substring(0, indexOfReverse);
                    let secondPart = concealedMessage.substring(indexOfReverse + ReverseL)
                    
                    let res = firstP + secondPart + reversed;
                    
                    console.log(res);
                    concealedMessage = res; 
                    
                } else {
                    console.log('error');
                }
                
                break;

            case 'ChangeAll':
                    let toBeChanged = tokens[1];
                    let toBeChangedWith = tokens[2];

                    let resultChangeAll = concealedMessage.split(toBeChanged).join(toBeChangedWith);

                    console.log(resultChangeAll);

                    concealedMessage = resultChangeAll;
                break;

            default:
                break;
        }
        index++;
    }
    
    if(data[index] === 'Reveal') {
        console.log(`You have a new text message: ${concealedMessage}`);
    };
};
secretChat([
    'heVVodar!gniV!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);