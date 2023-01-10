function revealWords(words, sentence) {
    
    let sentenceArr = sentence.split(' ')
    let wordsArr = words.split(', ')
    
    for (const word of wordsArr) {
        
        for (let index = 0; index < sentenceArr.length; index++) {
            if (sentenceArr[index].includes('*') && sentenceArr[index].length === word.length) {
                sentenceArr[index] = word;
            };
            
        };
    }
    
    console.log(sentenceArr.join(' '));
};
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'

)