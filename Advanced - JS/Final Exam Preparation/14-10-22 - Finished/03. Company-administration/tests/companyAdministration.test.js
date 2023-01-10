let {companyAdministration} = require("../companyAdministration")
let {assert} = require('chai')


//{hiringEmployee: ƒ, calculateSalary: ƒ, firedEmployee: ƒ}

describe("Tests companyAdministration", function() {
    describe("tests hiringEmployee function", function() {

        it("Should throw error with other than Programmer", function() {
            assert.throw(()=> companyAdministration.hiringEmployee('gosho', 'strindas', 1), `We are not looking for workers for this position.`)
        });

        it('should be approved with 3 or more years',()=> {
            assert.equal(companyAdministration.hiringEmployee('gosho', 'Programmer', 3), `gosho was successfully hired for the position Programmer.`)
            assert.equal(companyAdministration.hiringEmployee('gosho', 'Programmer', 4), `gosho was successfully hired for the position Programmer.`)
            assert.equal(companyAdministration.hiringEmployee('gosho', 'Programmer', 2), `gosho is not approved for this position.`)
        })
     });

     describe('tests calculateSalary', ()=> {
        it('should work with correct value', ()=> {
            assert.throw(()=>companyAdministration.calculateSalary('string'),"Invalid hours")
            assert.throw(()=>companyAdministration.calculateSalary([]),"Invalid hours")
            assert.throw(()=>companyAdministration.calculateSalary({}),"Invalid hours")
            assert.throw(()=>companyAdministration.calculateSalary(true),"Invalid hours")
            assert.throw(()=>companyAdministration.calculateSalary({name: 'haha'}),"Invalid hours")
            assert.throw(()=>companyAdministration.calculateSalary(-1),"Invalid hours")
            //assert.throw(()=>companyAdministration.calculateSalary(0),"Invalid hours") // if not 100/100
        })

        it('should calculate proper wage', ()=> {
            assert.equal(companyAdministration.calculateSalary(1), 15)
            assert.equal(companyAdministration.calculateSalary(165), 3475)
            assert.equal(companyAdministration.calculateSalary(0), 0);
        })
     })

     describe('tests firedEmployee', ()=> {
        it('should throw error with wrong input', ()=> {
            assert.throw(()=>companyAdministration.firedEmployee('text', 1),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee(1, 1),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee('text', []),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee(1, []),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee(true, 1),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee([], {}),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee(['haha'], 2),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee([], 1),"Invalid input")

        })

        it('should give correct output', ()=> {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), "Petar, George")
            
        })
     })
});
