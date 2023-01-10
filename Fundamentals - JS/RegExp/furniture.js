function furniture(data) {

    let regExp = />>(?<item>[A-Za-z]+)<<(?<price>[\d+\.\d+]+)!(?<quantity>\d+)/gm;

    let currLine = null;
    let result = 0;

    console.log('Bought furniture:');

    while ((currLine = regExp.exec(data)) !== null) {
        let item = currLine.groups.item;
        let price = Number(currLine.groups.price);
        let quantity = Number(currLine.groups.quantity);

        console.log(item);

        result += price * quantity;
    };

    console.log(`Total money spend: ${result.toFixed(2)}`);
};
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']

)