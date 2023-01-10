function cardGame(data) {

    let result = {};

    let cardsInfo = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };

    for (const line of data) {
        let tokens = line.split(': ');
        let name = tokens.shift();
        let cards = tokens.join('').split(', ')
        let newCards = new Set(cards);

        if (!result.hasOwnProperty(name)) {

            result[name] = newCards;
        } else {
            let oldValue = result[name];
            let newValue = newCards;

            result[name] = new Set([...oldValue, ...newValue]);
        }
    }

    for (const person in result) {
        let sum = 0;
        for (const card of result[person]) {
            let cards = card.split('');
            let cardColor = cards.pop();
            let cardType = cards.join('');

            switch (cardColor) {
                case 'S':
                    sum += cardsInfo[cardType] * 4;
                    break;

                case 'H':
                    sum += cardsInfo[cardType] * 3;
                    break;

                case 'D':
                    sum += cardsInfo[cardType] * 2;
                    break;

                case 'C':
                    sum += cardsInfo[cardType];
                    break;

                default:
                    break;
            };
        };
        console.log(`${person}: ${sum}`);
    };
};
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)