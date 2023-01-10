function schoolGrades(data) {
    let schoolGrades = {};

    for (const line of data) {

        let tokens = line.split(' ')
        let name = tokens.shift();

        if (schoolGrades.hasOwnProperty(name)) {
            let diff1 = schoolGrades[name];
            let diff2 = tokens;
            let resultDiff = diff1.concat(diff2);
            schoolGrades[name] = resultDiff;

        } else {
            schoolGrades[name] = tokens;
        }
    }
    for (const key in schoolGrades) {
        let currentGrades = schoolGrades[key];
        let result = 0;
        for (let i = 0; i < currentGrades.length; i++) {

            result += Number(currentGrades[i]);
        }
        let endGrade = result / currentGrades.length
        schoolGrades[key] = endGrade;
    }
    let unsorted = Object.keys(schoolGrades);

    let sortedByName = unsorted.sort((a, b) => {
        return a.localeCompare(b)
    });

    for (const key of sortedByName) {
        console.log(`${key}: ${schoolGrades[key].toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 2 3',
    'Tammy 2 4 3',
    'Tim 2']

)