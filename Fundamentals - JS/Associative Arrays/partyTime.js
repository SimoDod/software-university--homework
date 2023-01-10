function partyTime(data) {

    let normal = new Set();
    let vip = new Set();

    for (const el of data) {
        let numEl = Number(el[0])
        if (el === 'PARTY') {
            break;
        }
        if (!isNaN(numEl)) {
            vip.add(el)
        } else {
            normal.add(el)
        }
    }
    let startIndex = data.indexOf('PARTY');

    for (let index = startIndex + 1; index < data.length; index++) {
        if (vip.has(data[index])) {
            let key = data[index]

            vip.delete(key);
        }
    }

    for (let index = startIndex + 1; index < data.length; index++) {

        if (normal.has(data[index])) {
            let key = data[index];

            normal.delete(key);
        }
    };
    console.log(vip.size + normal.size);
    vip.forEach(x => console.log(x))
    normal.forEach(x => console.log(x))
};
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);