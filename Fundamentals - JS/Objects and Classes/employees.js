function employees(input) {
    let myObj = {};


    for (const el of input) {
        myObj.name = el;
        myObj.number = el.length

        console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.number}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)