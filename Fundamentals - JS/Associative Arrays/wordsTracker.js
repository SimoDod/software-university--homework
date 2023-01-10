function wordsTracker(data) {
    let matchSentence = data.shift().split(' ');

    let wordsObj = {};

    matchSentence.forEach(word => wordsObj[word] = 0);

    for (const word of data) {
        if (wordsObj.hasOwnProperty(word)) {
            let oldValue = wordsObj[word];
            wordsObj[word] = oldValue + 1;
        };
    };

    let sortedResult = Object.entries(wordsObj).sort((a,b) => {
        return  b[1] - a[1];
    });
    
    for (const [key, value] of sortedResult) {
        matchSentence.forEach(item => {
            if (key === item) {
                console.log(`${key} - ${value}`);
            };
        });
    };
}
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence', 'the']
    
)