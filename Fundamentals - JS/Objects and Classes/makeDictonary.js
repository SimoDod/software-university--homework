function makeDictonary(input) {
    let dictonary = [];
    let myObj = {};

    for (const el of input) {
        let parsedEl = JSON.parse(el);
        
        let tempEntries = Object.entries(parsedEl);

        let tempKey = Object.keys(parsedEl);

        if (dictonary.includes(tempEntries[0])) {
            myObj[tempEntries[0]] = tempEntries[1];
        } else {
            myObj = Object.assign(myObj, parsedEl);
        }
        dictonary.push(tempKey);
    }

    let terms = Object.keys(myObj);
    terms = terms.sort();
    
    for (const term of terms) {
        console.log(`Term: ${term} => Definition: ${myObj[term]}`);
    }

}
makeDictonary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)