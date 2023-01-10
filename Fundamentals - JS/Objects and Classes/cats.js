function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    let result = []

    for (let key of input) {
        let token = key.split(' ');
        let catName = token[0];
        let catAge = token[1];
        let myCat = new Cat(catName, catAge);

        result.push(myCat)
    }

    for (let myCat of result) {
        myCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])