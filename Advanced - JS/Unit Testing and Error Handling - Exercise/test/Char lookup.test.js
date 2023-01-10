let {assert} = require('chai');
let {lookupChar} = require('../CharLookup');


describe('test with incorrect value', ()=> {
    it('should return undefined if first parameter is NOT a string', ()=> {
        assert.equal(lookupChar(2, 2), undefined)
    })

    it('should return undefined if second parameter is NOT a number', ()=> {
        assert.equal(lookupChar('2', '2'), undefined)
    });

    it('should return undefined if second parameter is decimal', () => {
        assert.equal(lookupChar('d', 0.5), undefined)
    })
    
    it('should return undefined if second parameter is array', () => {
        assert.equal(lookupChar('d', [0.5]), undefined)
    })
    
});

describe('test with correct values but incorrect index', ()=> {
    it('should return "Incorrect index" if the index(second param) is bigger than string(first param) length', ()=> {
        assert.equal(lookupChar('qwerty', 15), "Incorrect index")
    })

    it('should return "Incorrect index" if the index(second param) is equal than string(first param) length', ()=> {
        assert.equal(lookupChar('qwerty', 6), "Incorrect index")
    })

    it('should return "Incorrect index" if the index(second param) is negative than string(first param) length', ()=> {
        assert.equal(lookupChar('qwerty', -1), "Incorrect index")
    })
})

describe('test with correct values and correct indecies', ()=>{
    it('should return M with SIMO',()=>{
        assert.equal(lookupChar('simo', 2), "m")
    })
})