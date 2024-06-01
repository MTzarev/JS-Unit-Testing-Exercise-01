let {myOwn} = require(`./module`);
let {expect} = require(`chai`);
describe (`firstTest`,()=>{
    it(`works`, ()=>{
        expect(!myOwn('Miroslav', 38, 'Bulgarian').includes(/\d+/))
    })
})

