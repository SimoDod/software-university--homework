function phoneBook(data) {
    let myObj = {};

    for (const line of data) {
        let [name, value] = line.split(' ');
        myObj[name] = value;
    }

    for (const key in myObj) {
        console.log(key,"->", myObj[key]);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)