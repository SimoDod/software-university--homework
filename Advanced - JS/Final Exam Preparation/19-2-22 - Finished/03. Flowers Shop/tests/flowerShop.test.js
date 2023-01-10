let {flowerShop} = require('../flowerShop');
let {assert} = require('chai');

// {calcPriceOfFlowers: ƒ, checkFlowersAvailable: ƒ, sellFlowers: ƒ}

describe("Tests …", function() {
    describe("tests calcPriceOfFlowers", function() {
        //•	calcPriceOfFlowers(flower, price, quantity) (one string and two numbers):
        it("should work with correct input", function() {
            assert.throw(()=>flowerShop.calcPriceOfFlowers('d', 1, 's'), "Invalid input!")
            assert.throw(()=>flowerShop.calcPriceOfFlowers([], 1 , 1), "Invalid input!")
            assert.throw(()=>flowerShop.calcPriceOfFlowers('', {}, 1), "Invalid input!")
            assert.throw(()=>flowerShop.calcPriceOfFlowers([], true, {name:"haha"}), "Invalid input!")
            assert.throw(()=>flowerShop.calcPriceOfFlowers(1,1,'haha'), "Invalid input!")
            assert.throw(()=>flowerShop.calcPriceOfFlowers(true, true, true), "Invalid input!")
            assert.throw(()=>flowerShop.calcPriceOfFlowers(['haha'], [1], [1]), "Invalid input!")
            assert.throw(()=>flowerShop.calcPriceOfFlowers(), "Invalid input!")
        });

        it('should return correct price and quantity', ()=> {
            let result = 5 * 10;
            let flower = 'Bloom'
            assert.equal(flowerShop.calcPriceOfFlowers(flower, 5, 10), `You need $${result.toFixed(2)} to buy ${flower}!`)
        }) 
    });
     
    describe('tests checkFlowersAvailable', ()=> {
        let availableFlowers = ["Rose", "Lily", "Orchid"];
        let flower = 'Rose';
        it('should be present', ()=> {
            assert.equal(flowerShop.checkFlowersAvailable(flower, availableFlowers) , `The ${flower} are available!`);

        })

        it('should be sold', ()=> {
            assert.equal(flowerShop.checkFlowersAvailable('Bloom', availableFlowers), `The Bloom are sold! You need to purchase more!`);
        })
    })

    describe('tests sellFlowers', ()=> {
        //(array and number):
        let gardenArrTest = ["Rose", "Lily", "Orchid"];
        
        it('should not work with wrong inputs', ()=> {
            assert.throw(()=>flowerShop.sellFlowers([], 1), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(["Rose"], 2), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers({rose: "rose"}, 1), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(gardenArrTest, -1), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers('1', gardenArrTest), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers([], gardenArrTest), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(gardenArrTest, []), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(gardenArrTest, true), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers([], []), "Invalid input!");
            assert.throw(()=>flowerShop.sellFlowers(false, []), "Invalid input!");
        })
        
        it('should remove the index', ()=> {
            assert.equal(flowerShop.sellFlowers(gardenArrTest, 1), "Rose / Orchid")
        })
    })
});
