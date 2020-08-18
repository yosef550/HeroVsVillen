const superheroes = require('superheroes');
const {Character}=require('./Character');


class Hero extends Character{
    
    constructor(Hp) {
        super(superheroes.random(),Hp);
    }
    
}
module.exports.Hero = Hero;