function personInfo(firstName, lastName, age) {

    let Person = {
        firstName,
        lastName,
        age
    };
    return Person;

}   
console.log(personInfo("Peter", 
"Pan",
"20"
))