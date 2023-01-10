function barcode(input) {
    let barcodeCount = Number(input.shift())

    const re = /@#+/g;

    const capitalCharChecker = /[A-Z]/g;

    const onlyLettersAndDigits = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

    const removeLetters = /[0-9]/g;

    let barcodes = [];

    let result = {};

    for (let i = 0; i < barcodeCount; i++) {
        let currBarcode = input[i];
        let timesMatched = currBarcode.match(re);

        if (currBarcode.match(re) && timesMatched.length > 1) {

            let withoutSpecial = currBarcode.replace(re, "");

            if (withoutSpecial.length >= 6) {

                let firstChar = withoutSpecial[0].match(capitalCharChecker)
                let lastChar = withoutSpecial[withoutSpecial.length - 1].match(capitalCharChecker);

                if (firstChar !== null && lastChar !== null) {
                    if (!withoutSpecial.match(onlyLettersAndDigits)) {
                        barcodes.push(withoutSpecial);
                    };
                };

            }
        };
    };


    for (const barcode of barcodes) {
        let digitsFromBarcode = barcode.toLowerCase().match(removeLetters);
        
        if (digitsFromBarcode !== null) {

            let sum = digitsFromBarcode.join('')
            let isNull = Number(sum)
            
            if(isNull === 0) {
                result[barcode] = 0;
            } else {
                result[barcode] = sum;
            }
            
        } else {

            result[barcode] = "00";
        };
    };

    for (let l = 0; l < barcodeCount; l++) {
        let toCompare = input[l].match(/\w+/g).join('');
        
        if (result[toCompare] || result[toCompare] == 0) {
            console.log(`Product group: ${result[toCompare]}`);
        } else {
            console.log('Invalid barcode');
        };
    };
};
barcode(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])


