const { Hero } = require('./hero');
const { Villain } = require('./Villain');

const hero = new Hero(100);
const villain = new Villain(100);


function AddEventsListeners() {
    
    hero.on('CharDamaged', (HP) => {
        console.log(`\u001b[1;36m${hero.CharName}: ohh! now i have ${HP} Hp left`);
    });
    hero.on('KO', () => {
        console.log(`\u001b[1;36m${hero.CharName} has been defeated!!`)
    })
    hero.on('Im Dying', () => {
        console.log(`\u001b[1;36m${hero.CharName}: Im Dying!!need help!`)
    })
    hero.on('CharAttack', (hit) => {
        console.log(`\u001b[1;36m${hero.CharName}: Haa hit you! now you down ${hit} Hp`)
    });
    hero.on('boost', (hp) => {
        console.log(`\u001b[1;32m${hero.CharName}: got boost bunos ${hp} Hp!!`)
    });
    villain.on('CharDamaged', (hit) => {
        console.log(`\u001b[1;31m              ${villain.CharName}: ohh! now i have ${hit} Hp left`);
    });
    villain.on('KO', () => {
        console.log(`\u001b[1;31m              ${villain.CharName} has been defeated`)
    });
    villain.on('Im Dying', () => {
        console.log(`\u001b[1;31m              ${villain.CharName}: Im Dying!!need help!`)
    })
    villain.on('boost', (hp) => {
        console.log(`\u001b[1;32m              ${villain.CharName}: got boost bunos ${hp} Hp!!`)
    })
    villain.on('CharAttack', (hit) => {
        console.log(`\u001b[1;31m               ${villain.CharName}: Haa hit you! now you down ${hit} Hp`);

    });
}
function VillainAttack() {
    //נבל תוקף גיבור
    villain.CharAttack(hero);
}
function HeroAttack() {
    //גיבור תוקף נבל
    hero.CharAttack(villain);
}

function WhoCharStart() {
    return Math.floor(Math.random() * 2);
}
function SwitchTurn(num) {
    if (num === 0) {
        return 1;
    }
    else {
        return 0;
    }
}
function FightersNames() {
    console.log(`The fight start now!`);
    console.log(`superhero: ${hero.CharName}  vs  supervillain: ${villain.CharName}`);
}

AddEventsListeners();
FightersNames();
var num = WhoCharStart();
while (hero.HP > 0 && villain.HP > 0) {
    if (num === 0) {
        VillainAttack();

    }
    else {
        HeroAttack();
    }
    num = SwitchTurn(num);
}


