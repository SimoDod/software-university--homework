function meetings(data) {
    let myObj = {};

    for (const line of data) {
        let [key, value] = line.split(' ');

        if (myObj.hasOwnProperty(key)) {
            console.log(`Conflict on ${key}!`);
        } else {
            console.log(`Scheduled for ${key}`);
            myObj[key] = value;
        }
    }

    for (const key in myObj) {
       console.log(`${key} -> ${myObj[key]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)