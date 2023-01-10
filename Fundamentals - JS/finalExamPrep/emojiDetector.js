function emojiDetector(data) {
    let digitsRegExp = /\d/g;
    let regExp = /([:|*]){2}(?<emoji>[A-Z][a-z]{2,})\1{2}/gm;

    let coolThreshold = data
        .join('')
        .match(digitsRegExp)
        .reduce((sum, x) => sum = sum * +x);

    let emojiCountFound = data.join('').match(regExp).length;

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojiCountFound} emojis found in the text. The cool ones are:`);

    let currEmoji = null;

    while ((currEmoji = regExp.exec(data))) {
        let emoji = currEmoji.groups.emoji;
        let result = 0;
        for (const el of emoji) {
            result += el.charCodeAt()
        };

        if (result >= coolThreshold) {
            console.log(currEmoji[0]);
        };
    };
};
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])