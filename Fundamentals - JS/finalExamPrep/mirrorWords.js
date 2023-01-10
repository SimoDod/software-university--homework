function mirrorWords(data) {
    let regExp = /([@|#])(?<words>[A-Za-z]{3,})\1([@|#])(?<reversed>[A-Za-z]{3,})\1/gm

    let currLine = null;

    let counter = 0;

    let result = [];

    let isFound = false;


    while ((currLine = regExp.exec(data)) !== null) {
        let word = currLine.groups.words;
        let reversed = currLine.groups.reversed;

        let checkIfReversed = reversed.split('').reverse().join('')

        if (word === checkIfReversed) {
            let currRes = `${word} <=> ${reversed}`;
            result.push(currRes);
            isFound = true;
        }
        counter++;
    }

    if (isFound) {
        console.log(`${counter} word pairs found!`);
        console.log('The mirror words are:');
        console.log(result.join(', '));
    } else {

        if (!counter) {
            console.log(`No word pairs found!`);
        } else {
            console.log(`${counter} word pairs found!`);
        }
        console.log("No mirror words!");
    }
}
mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]
)
console.log('---------------------------------');

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])