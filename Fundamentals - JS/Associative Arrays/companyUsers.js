function companyUserID(data) {
    let result = {};
    let resultArr = [];

    for (const line of data) {

        let tokens = line.split(' -> ')
        let companyName = tokens[0];
        let userName = tokens[1];

        resultArr.push([companyName, userName]);
    }

    resultArr.sort(([keyA, valueA], [keyB, ValueB]) => {
        return keyA.localeCompare(keyB);
    });

    resultArr.forEach(x => {
        let [key, value] = x;

        if (!result.hasOwnProperty(key)) {
            result[key] = new Set();
        }
        result[key].add(value);
    });

    for (const key in result) {
        console.log(key);
        result[key].forEach(x => console.log(`-- ${x}`))
    }
};
companyUserID([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)