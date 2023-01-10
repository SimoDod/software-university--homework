function lowestPrice(input) {

    let res = {}

    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(' | ');
        price = Number(price);
        
        if (!res.hasOwnProperty(product)) {
            res[product] = { town, price };

        } else {
            let oldPrice = res[product].price

            if (oldPrice > price) {
                res[product].town = town;
                res[product].price = price;
            }
        }
    }
    for (const [key, value] of Object.entries(res)) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }
}
lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
)