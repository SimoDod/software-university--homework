function destinationMapper(data) {
    let validWordsRegExp = /=[A-Z][a-zA-Z]{2,}=|\/[A-Z][a-zA-Z]{2,}\//g;

    let validWords = data.match(validWordsRegExp);

    let buffer = '';

    if (validWords !== null) {

        for (let i = 0; i < validWords.length; i++) {
            for (let j = 1; j < validWords[i].length - 1; j++) {
                buffer += validWords[i][j]
            }
            buffer += ', '
        };
    };
    
    let clearLastEl = buffer.split(', ')
    clearLastEl.pop();
    let result = clearLastEl.join(', ')
    console.log(`Destinations: ${result}`);

    let sum = buffer.split(', ').join('');
    console.log(`Travel Points: ${sum.length}`);
};


destinationMapper(`=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/==`)
