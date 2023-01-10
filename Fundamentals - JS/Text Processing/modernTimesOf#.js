function modernTimes(sentence) {
    let sentenceArr = sentence.split(' ');
    let isTrue = true;
    
    for (let index = 0; index < sentenceArr.length; index++) {
        const element = sentenceArr[index];
        // 97 - 122 inclusive
        // 35 - #
        if (element.includes('#') && element.length > 1) {
            let toLower = element.toLowerCase();

            for (let i = 1; i < toLower.length; i++) {
                
                if (toLower[i].charCodeAt() < 97 || toLower[i].charCodeAt() > 122) {
                    isTrue = false;
                } 
            }
            if(isTrue) {
                console.log(element.slice(1));
            }
            isTrue = true;
        };
    };
};
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')