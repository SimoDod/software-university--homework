class List {
  constructor(el) {
    this.input = []
    this.el = el;
    this.size = this.input.length;
  }

  
  add(el) {
    this.size++;
    this.input.push(el);
    return this.input.sort((a,b)=> a - b)
    
  };

  remove(el){
    
    if (this.input[el] !== undefined) {
        this.size--;
        this.input.splice(el, 1);
    }
    return this.input
  };

  get(el){
     return this.input[el];
  };
}

let myList = new List();

console.log(myList.add(5));
console.log(myList.add(3));
console.log(myList.get(0));
console.log(myList.remove(0));
console.log(myList.size);






