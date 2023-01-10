let carService = require('../carServiceResources')
let {assert} = require('chai');

describe('testing the code', ()=> {
    describe('testing isItExpensive functionality', ()=> {
        it('should work with string', ()=> {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive('gosho'), `The overall price will be a bit cheaper`);
            
        })
        
    })

    describe('testing discount functionality', ()=> {
        it('should not work with wrong input', ()=> {
            assert.throw(()=>carService.discount('string', 1), "Invalid input");
            assert.throw(()=>carService.discount(1, ['string']), "Invalid input");
            assert.throw(()=>carService.discount({}, []), "Invalid input");
            assert.throw(()=>carService.discount(true, []), "Invalid input");
            assert.throw(()=>carService.discount(true, [{name:'haha'}]), "Invalid input");
        })
        
        it('should apply correct discount', ()=> {
            assert.equal(carService.discount(1, 2), "You cannot apply a discount")
            assert.equal(carService.discount(2, 2), "You cannot apply a discount")
            assert.equal(carService.discount(3, 2), `Discount applied! You saved ${2 * 0.15}$`)
            assert.equal(carService.discount(7, 2), `Discount applied! You saved ${2 * 0.15}$`)
            assert.equal(carService.discount(8, 2), `Discount applied! You saved ${2 * 0.30}$`)
        })
    }) 

    describe('testing partsToBuy functionallity', ()=> {
        it('should be an array', ()=> {
            assert.throw(()=>carService.partsToBuy([], {}), 'Invalid input');
            assert.throw(()=>carService.partsToBuy(1, []), 'Invalid input');
            assert.throw(()=>carService.partsToBuy('text', 'number'), 'Invalid input');
            assert.throw(()=>carService.partsToBuy([], false), 'Invalid input');
            assert.throw(()=>carService.partsToBuy(['haha'], {name: 'haha'}), 'Invalid input');
        })

        /* partsToBuy(partsCatalog, neededParts) {
            let totalSum = 0;
        
            if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
              throw new Error("Invalid input");
            }
            neededParts.forEach((neededPart) => {
              partsCatalog.map((obj) => {
                if (obj.part === neededPart) {
                  totalSum += obj.price;
                }
              });
            });
        
            return totalSum;
          }, */


        it('should work with valid inputs', ()=> {
            assert.equal(carService.partsToBuy([], [1]), 0)
        })

        it('totalPrice Should be equal to the neededParts',()=> {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ["blowoff valve"]), 145)
        })
    })
})
