function barIncome(data) {
    let regExp = /%(?<name>[A-Z][a-z]*)%[^.|*?]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+)\$/gm

    let index = 0;

    let currLine = null;
    let totalIncome = 0;

    while ((currLine = regExp.exec(data)) !== null) {

        if (data[index] === 'end of shift') {
            break;
        }

        let name = currLine.groups.name;
        let product = currLine.groups.product;
        let count = Number(currLine.groups.count);
        let price = parseFloat(currLine.groups.price);
        let sum = count * price;

        totalIncome += sum;
        console.log(`${name}: ${product} - ${sum.toFixed(2)}`);

        index++;
    };
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
};
barIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)

console.log('===========================');
barIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)