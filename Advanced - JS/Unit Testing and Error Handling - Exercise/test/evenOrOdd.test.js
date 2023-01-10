let isOddOrEven = require('../evenOrOdd');
let {assert} = require('chai');
const { it } = require('mocha');


describe('test with incorrect value', () => {
    it('should return undefined with array', () => {
        assert.equal(isOddOrEven([]), undefined)
    })

    it('should return undefined with empty object', ()=> {
        assert.equal(isOddOrEven({}), undefined)
    })

    it('should return undefined with object with property in it', ()=> {
        assert.equal(isOddOrEven({name: 'gosho'}), undefined)
    });

    it('should return undefined with boolean', ()=> {
        assert.equal(isOddOrEven(true), undefined)
    });

    it('should return undefined with number', ()=> {
        assert.equal(isOddOrEven(1), undefined)
    })
})

describe('testing with correct input', ()=> {
    it('should return even', () => {
        assert.equal(isOddOrEven('simo'), 'even');
    });

    it('should return odd', ()=> {
        assert.equal(isOddOrEven('sim'), "odd")
    })
})
