function townsToJSON(input) {
    let regExp = /[\|\ ](?<match>[\w]+[\w\s\w]+|[\d\.\d]+)[\ \|]/gm

    let matchingElements = null;
    let resArr = [];
    let res = [];

    while ((matchingElements = regExp.exec(input)) !== null) {
        let currEl = matchingElements.groups.match;
        resArr.push(currEl.trim())
    }

    
    for (let i = 3; i < resArr.length; i += 3) {
        let latitudeNum = Number(resArr[i + 1]).toFixed(2);
        let longtitudeNum = Number(resArr[i + 2]).toFixed(2)
        latitudeNum = Number(latitudeNum);
        longtitudeNum = Number(longtitudeNum);

        res.push({ Town: resArr[i], Latitude: latitudeNum, Longitude: longtitudeNum });

    }
    console.log(JSON.stringify(res));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])