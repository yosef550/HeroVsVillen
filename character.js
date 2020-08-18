const EventEmitter = require("events").EventEmitter;

class Character extends EventEmitter {
    // CharName
    // HP
    // previousHit
    // comboCount
    constructor(charName, hP) {
        super();
        this.CharName = charName;
        this.HP = hP;
    }
    CharDamaged(HitDamege) {
        if (this.HP > HitDamege) {
            this.HP -= HitDamege;
            this.emit('CharDamaged', this.HP, HitDamege);
            if (this.HP <= 20) {
                this.emit('Im Dying');
            }
        }
        else {
            this.HP = 0;
            this.emit('KO');
        }
    }
    CharAttack(someCharacter) {
        var hit = Math.floor(Math.random() * 11);
        // this.previousHit = hit;
        if (hit === 10) {
            this.HP += 20;
            this.emit('boost', 20);
        }
        this.emit("CharAttack", hit);0
        someCharacter.CharDamaged(hit);

    }


}
module.exports.Character = Character;