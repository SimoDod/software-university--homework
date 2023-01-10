function piccolo(data) {

    let result = new Set();

    for (const el of data) {
        let tokens = el.split(', ');
        let direction = tokens.shift();
        let regNumber = tokens[0];

        switch (direction) {
            case 'IN':
                result.add(regNumber)
                break;

            case 'OUT':
                result.delete(regNumber)
                break;
            default:
                break;
        };
    };

    let toArr = Array.from(result.values()).sort();
    
    if(toArr.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        toArr.forEach(x => console.log(x));
    };
};
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)