function stringSubstring(match, sentence) {

    let sentenceArrToLowCase = sentence.toLowerCase().split(' ');

    let notFound = true;

    for (const word of sentenceArrToLowCase) {

        if (word === match) {
            console.log(match);
            notFound = false;
            break;
        };
    }

    if (notFound) {
        console.log(`${match} not found!`);
    };
}
stringSubstring('javascript',
    ' is the best programming JavaScrip language'
)