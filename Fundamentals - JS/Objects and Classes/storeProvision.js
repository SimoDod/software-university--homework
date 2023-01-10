function storeProvision(currentStock, orderList) {
    let Store = {};
    let currentStockL = currentStock.length;
    let orderListL = orderList.length;

    for (let i = 0; i < currentStockL; i += 2) {
        let product = currentStock[i];
        Store[product] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderListL; i += 2) {
        let product = orderList[i];
        if (!Store.hasOwnProperty(product)) {
            Store[product] = 0;
        }
        Store[product] += Number(orderList[i + 1]);
    }

    for (const key in Store) {
        console.log(`${key} -> ${Store[key]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)