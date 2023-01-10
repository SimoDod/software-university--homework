function convertToJSON(name, lastName, hairColor) {
    let Person = {
        name,
        lastName,
        hairColor,
    };

    let result = JSON.stringify(Person);
    console.log(result);
}
convertToJSON('George', 'Jones', 'Brown')