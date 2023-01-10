class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables (vegetables) {
        let buff = `Successfully added `
        let vegieBuff = [];
    
        for (const vegetable of vegetables) {
            let [name, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let findCurrVegie = this.availableProducts.find(vegie => vegie.name == name)

            let currVeg =  {
                name,
                quantity,
                price
            }

           if(!vegieBuff.includes(name)) {
            vegieBuff.push(name)
           }
            
           if(!findCurrVegie) {
            this.availableProducts.push(currVeg)
           } else {
            findCurrVegie.quantity += quantity;
            if(findCurrVegie.price < price) {
                findCurrVegie.price = price
            }
           }
        }
     
        return buff + vegieBuff.join(', ')
    }

     buyingVegetables (selectedProducts) { 
        let calcTotalPrice = 0;

        for (const vegie of selectedProducts) {
            let [name, quantity] = vegie.split(' ');
            quantity = Number(quantity)
            
            let currVegie = this.availableProducts.find(vegie => vegie.name === name);
            
                if(!currVegie) {
                    throw new Error(`${name} is not available in the store, your current bill is $${calcTotalPrice.toFixed(2)}.`)
                }
                if(currVegie.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${name} is not available in the store, your current bill is $${calcTotalPrice.toFixed(2)}.`)
                }
                calcTotalPrice += quantity * currVegie.price;
                currVegie.quantity -= quantity;
            
        }
        return `Great choice! You must pay the following amount $${calcTotalPrice.toFixed(2)}.`
    } 

    rottingVegetable (type, quantity) {
        for (const product of this.availableProducts) {
            
            if(product.name !== type) {
                throw new Error(`${type} is not available in the store.`)
            }

            if(quantity >= product.quantity) {
                product.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`
            } else {
                product.quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`
            }
        }
    }

    revision () {
        let buff = 'Available vegetables:\n';
        

        let sortedVegie = this.availableProducts.sort((a,b) => {
            return a.price - b.price;
        })

        for (const vegie of sortedVegie) {
            buff += `${vegie.name}-${vegie.quantity}-$${vegie.price}\n`
        }
        buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`

        return buff
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



