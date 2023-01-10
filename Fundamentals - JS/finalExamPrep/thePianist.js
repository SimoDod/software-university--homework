function thePianist(data) {
    let startingPieces = data.shift();

    let collection = [];

    for (let index = 0; index < startingPieces; index++) {
        let currentPiece = data.shift();

        collection.push(currentPiece)
    }

    let i = 0;

    while (data[i] !== 'Stop') {
        let commandLine = data[i].split('|')
        let command = commandLine[0];

        switch (command) {
            case 'Add':
                let pieceAdd = commandLine[1];
                let composerAdd = commandLine[2];
                let keyAdd = commandLine[3];

                let toStringCollection = collection.join('');

                if (toStringCollection.includes(pieceAdd)) {
                    console.log(`${pieceAdd} is already in the collection!`);

                } else {
                    let toPush = `${pieceAdd}|${composerAdd}|${keyAdd}`
                    collection.push(toPush);
                    console.log(`${pieceAdd} by ${composerAdd} in ${keyAdd} added to the collection!`);

                }

                break;

            case 'Remove':
                let pieceRemove = commandLine[1];
                let isTrue = true;
        
                for (let index = 0; index < collection.length; index++) {
                    if (collection[index].includes(pieceRemove)) {
                        collection[index] = '';
                        console.log(`Successfully removed ${pieceRemove}!`);
                        isTrue = false;
                    }

                };

                if (isTrue) {
                    console.log(`Invalid operation! ${pieceRemove} does not exist in the collection.`);
                }
                break;

            case 'ChangeKey':

                let pieceToChangeKey = commandLine[1];
                let newKey = commandLine[2];
                let isTrueChangeKey = true;
                
                
                
                for (let index = 0; index < collection.length; index++) {
                    
                    if(collection[index].includes(pieceToChangeKey)) {
                        let oldKey = collection[index].split('|');
                        oldKey = oldKey[2];

                        collection[index] = collection[index].replace(oldKey, newKey)
                        
                        console.log(`Changed the key of ${pieceToChangeKey} to ${newKey}!`);
                        isTrueChangeKey = false;
                    }
                    
                }
                
                if (isTrueChangeKey) {
                    console.log(`Invalid operation! ${pieceToChangeKey} does not exist in the collection.`);
                }
                break;
            default:
                break;
        };
        i++;
    };

    for (const el of collection) {
        let separatedEl = el.split('|');
        let song = separatedEl[0];
        let composer = separatedEl[1];
        let key = separatedEl[2];

        if(el.length < 1) {

        } else {
            console.log(`${song} -> Composer: ${composer}, Key: ${key}`);
        }
    };
};
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)