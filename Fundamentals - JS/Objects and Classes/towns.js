function towns(input) {
    let myObj = {};

    for (const el of input) {

        let data = el.split(' | ');

        let town = data[0];
        let latitude = Number(data[1]).toFixed(2);
        let longitude = Number(data[2]).toFixed(2)

        myObj = {
            town,
            latitude,
            longitude
        }
        console.log(myObj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])