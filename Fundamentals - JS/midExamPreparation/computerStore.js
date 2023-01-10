function computerStore(input) {
    let index = 0;

    let totalSum = 0;

    while (input[index] !== "special") {
        if (input[index] === "regular") {
            break;
        }


        let price = Number(input[index]);

        if (price < 0) {
            console.log('Invalid price!');
            index++;
            continue;
        }
        totalSum += price;

        index++;
    }
    let taxes = totalSum * 0.2;

    let result = totalSum + taxes;


    if (input[index] === "special") {
        result *= 0.9;

    }

    if (totalSum <= 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${result.toFixed(2)}$`);
    }

}
computerStore([
    'regular'
])

