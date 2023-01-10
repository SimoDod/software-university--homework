function minerTask(data) {
    let result = {};

    for (let index = 0; index < data.length; index += 2) {
        let resource = data[index];
        let quantity = Number(data[index + 1]);
        
        if (result.hasOwnProperty(resource)) {
            result[resource] += quantity;
        } else {
            result[resource] = quantity;
        }
        
    }
    for (const key in result) {
        console.log(key, '->', result[key]);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
);