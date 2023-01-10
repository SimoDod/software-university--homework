const { bookSelection } = require("../solution");
const {assert} = require('chai')

//isGenreSuitable, isItAffordable, suitableTitles

describe('testing bookSelection functionality', ()=> {
    describe('testing isGenreSuitable function', ()=> {
        it('should NOT work with thriller and horror and age under 12', ()=> {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 11), `Books with Thriller genre are not suitable for kids at 11 age`)
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 11), `Books with Horror genre are not suitable for kids at 11 age`)
        })

        it('should work with thriller and horror and age above 12', ()=> {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('haha', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('haha', 12), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('haha', 11), `Those books are suitable`);
            
        })
    })

    describe('testing isItAffordable function', ()=> {
        it('should work with correct inputs', ()=> {
            assert.throw(()=>bookSelection.isItAffordable('text', 1), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable(1, []), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable(1, 'text'), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable({}, 1), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable(false, 1), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable(1, true), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable({name: 'haha'}, 1), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable(1, ['haha']), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable({}, []), "Invalid input")
            assert.throw(()=>bookSelection.isItAffordable(true, 'text'), "Invalid input")
        })

        it('result should NOT be lower than 0', ()=> {
            assert.equal(bookSelection.isItAffordable(1000, 500), "You don't have enough money")
        })
        it('should return correct sum after substracting', ()=> {
            assert.equal(bookSelection.isItAffordable(500, 1000), `Book bought. You have 500$ left`)
            assert.equal(bookSelection.isItAffordable(500, 500), `Book bought. You have 0$ left`)
        })  
    })

    describe('testing suitableTitles function', ()=> {
        it('should work with correct inputs', ()=> {
            assert.throw(()=>bookSelection.suitableTitles('text', 'text'), "Invalid input");
            assert.throw(()=>bookSelection.suitableTitles([], 1), "Invalid input");
            assert.throw(()=>bookSelection.suitableTitles(1, 'text'), "Invalid input");
            assert.throw(()=>bookSelection.suitableTitles([], true), "Invalid input");
            assert.throw(()=>bookSelection.suitableTitles({text: 'haha'}, 'text'), "Invalid input");
            assert.throw(()=>bookSelection.suitableTitles('text', []), "Invalid input");
            assert.throw(()=>bookSelection.suitableTitles([], {}), "Invalid input");
            
        })

         it('shuld return correct data', ()=> {
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller'), "The Da Vinci Code")
        }) 
    })
})