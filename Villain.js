const supervillains = require('supervillains');
const {Character}=require('./Character');


class Villain extends Character {
    
    constructor(Hp) {
        super(supervillains.random(),Hp);        
    }
   
}

module.exports.Villain =Villain;