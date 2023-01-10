function convertToObject(input) {
    let Person = JSON.parse(input);

    for (let key of Object.keys(Person)) {
        console.log(`${key}: ${Person[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')