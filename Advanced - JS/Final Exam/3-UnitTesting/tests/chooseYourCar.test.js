let {chooseYourCar} = require('../chooseYourCar')
let {assert} = require('chai');

//{choosingType: ƒ, brandName: ƒ, carFuelConsumption: ƒ}

describe("Tests …", function() {
    describe("Tests choosingType", function() {
        //•	choosingType (type, color, year) string, string, number.
        it("should work with correct yaear", function() {
            assert.throw(()=>chooseYourCar.choosingType('Audi', 'Blue', 1899), "Invalid Year!");
            assert.throw(()=>chooseYourCar.choosingType('Audi', 'Blue', 2023), "Invalid Year!");
        });

        it('should work with sedan', ()=> {
            assert.throw(()=>chooseYourCar.choosingType('Audi', 'Blue', 1901), "This type of car is not what you are looking for.");
        })

        it('should meet criteria', ()=> {
            assert.equal(chooseYourCar.choosingType('Sedan', 'Blue', 2010), "This Blue Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType('Sedan', 'Blue', 2011), "This Blue Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType('Sedan', 'Blue', 2009), "This Sedan is too old for you, especially with that Blue color.")
        });
        
    });

    describe('testing brandName', ()=> {
        //•	brandName (brands, brandIndex) array, number
        let brandsName = ["BMW", "Toyota", "Peugeot"];
        
        it('must remove correct element', ()=> {
            assert.equal(chooseYourCar.brandName(brandsName, 1), "BMW, Peugeot")
        })

        it('should work with correct inputs',() => {
            assert.throw(()=>chooseYourCar.brandName(brandsName, 3), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(brandsName, -1), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName({brandsName}, 1), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(1, 'text'), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(true, 1), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(true, true), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName([], []), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(1, brandsName), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName({}, brandsName), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(1, brandsName), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(brandsName, '1'), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(brandsName, true), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(brandsName, brandsName), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(brandsName, []), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(brandsName, {name:'haha'}), "Invalid Information!");
        })
    })
     

    describe('testing carFuelConsumption', ()=> {
        //CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres) number, number
        
        it('should calculate correct consumption', ()=> {
            assert.equal(chooseYourCar.carFuelConsumption(100, 8), "The car burns too much fuel - 8.00 liters!");
            assert.equal(chooseYourCar.carFuelConsumption(100, 5), "The car is efficient enough, it burns 5.00 liters/100 km.");
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), "The car is efficient enough, it burns 7.00 liters/100 km.");
        })

        it('should work with correct inputs', ()=> {
            assert.throw(()=>chooseYourCar.carFuelConsumption(1, -1), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(-1, 1), "Invalid Information!")
            assert.throw(()=>chooseYourCar.carFuelConsumption(0,0), "Invalid Information!")
            assert.throw(()=>chooseYourCar.carFuelConsumption([], 1), "Invalid Information!")
            assert.throw(()=>chooseYourCar.carFuelConsumption(1, {}), "Invalid Information!")
            assert.throw(()=>chooseYourCar.carFuelConsumption(true, 1), "Invalid Information!")
            assert.throw(()=>chooseYourCar.carFuelConsumption(1, 'text'), "Invalid Information!")
            assert.throw(()=>chooseYourCar.carFuelConsumption('1', '1'), "Invalid Information!")
        })
    })
});
