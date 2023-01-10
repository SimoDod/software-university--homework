function adressBook(data) {
    let persons = {};

    for (const line of data) {
        let [name, adress] = line.split(':');
        persons[name] = adress;
    }

    let unsortedKeys = Object.keys(persons);
    let sortKey = unsortedKeys.sort((a,b) => {
        return a.localeCompare(b);
    })

    for (const key of sortKey) {
        console.log(key,'->',persons[key]);
    }
}
adressBook(['Tim:Doe Crossing', //['Bill', 'Peter', 'Tim']
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)