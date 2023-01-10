function storage(data) {
    let items = new Map();

    for (const line of data) {
        let [key, value] = line.split(' ');

        if (items.has(key)) {
            let oldProduct = Number(items.get(key));
            let numValue = Number(value);
            items.set(key, numValue + oldProduct);
        } else {
            items.set(key, value)
        }
    }

    for (const [a, b] of items) {
        console.log(a, '->', b);
    }
}
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']

)