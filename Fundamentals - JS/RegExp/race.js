function race(data) {

    let names = data.shift().split(', ');
    let regExp = /(?<name>[A-Za-z]+)|(?<distance>[\d+])/gm

    let index = 0;
    let peopleInfo = {};

    for (const el of names) {
        peopleInfo[el] = 0;
    }

    while (data[index] !== 'end of race') {
        let currLine = data[index].match(regExp)

        let sum = 0;
        let buffer = '';

        currLine.forEach((x, i) => {
            if (!isNaN(x)) {
                sum += Number(x);
            } else {
                buffer += currLine[i];
            }
        });
        
        /* for (let i = 0; i < currLine.length; i++) {

            let isCurrElNaN = Number(currLine[i])

            if (!isNaN(isCurrElNaN)) {
                sum += Number(currLine[i]);
            } else {
                buffer += currLine[i];
            }
        } */

        if (peopleInfo.hasOwnProperty(buffer)) {
            peopleInfo[buffer] += sum;
        }
        index++;
    }

    const sorted = Object.entries(peopleInfo)
        .sort(([name1, distance1], [name2, distance2]) => {
            return distance2 - distance1;
        })

    let first = sorted[0][0];
    let second = sorted[1][0]
    let third = sorted[2][0]

    console.log(`1st place: ${first}`)
    console.log(`2nd place: ${second}`)
    console.log(`3rd place: ${third}`)
};
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)