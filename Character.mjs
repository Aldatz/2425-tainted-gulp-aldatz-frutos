export default class Character {
    constructor(fullName, health, magick, stamina, potions) {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(playerData, potions) {
        const { name, class: className, health, magick, stamina } = playerData;
        const fullName = `${name} the ${className}`;
        
        return new Character(fullName, health, magick, stamina, potions);
    }
    
    drinkEmAll() {
        for (let i = 0; i < this.potions.length; i++) {
            const potion = this.potions[i];
            if (potion.name === "Potion of Sanity") {
                this.health += potion.value;
                this.magick += potion.value;
                this.stamina += potion.value;
                console.log(`${this.fullName} drinks the ${potion.name} and gains ${potion.value} points to all attributes.`);
                console.log(`Health:        ${this.health}`);
                console.log(`Magick:        ${this.magick}`);
                console.log(`Stamina:       ${this.stamina}`);
                console.log('------------------------------------------');
                console.log(`${this.fullName} has found the ${potion.name}. Hismind is healed. Well done!`);
                break;
            }
            if (potion.name.includes("Poison")) {
                if (potion.name.includes("Health")) {
                    this.health -= potion.value;
                    console.log(`${this.fullName} drinks ${potion.name} and loses ${potion.value} points of health.`);
                }
                else if (potion.name.includes("Magicka")) {
                    this.magick -= potion.value;
                    console.log(`${this.fullName} drinks ${potion.name} and loses ${potion.value} points of magick.`);
                }
                else if (potion.name.includes("Stamina")) {
                    this.stamina -= potion.value;
                    console.log(`${this.fullName} drinks ${potion.name} and loses ${potion.value} points of stamina.`);
                }
                else {
                    this.health -= 1;
                    this.magick -= 1;
                    this.stamina -= 1;
                    console.log(`${this.fullName} drinks ${potion.name} and loses -1 to all attributes.`);
                }
            }
            else if (potion.name.includes("Health")) {
                this.health += potion.value;
                console.log(`${this.fullName} the ${potion.name} drinks and gains ${potion.value} points of health.`);
            }
            else if (potion.name.includes("Magicka")) {
                this.magick += potion.value;
                console.log(`${this.fullName} the ${potion.name} drinks and gains ${potion.value} points of magick.`);
            }
            else if (potion.name.includes("Stamina")) {
                this.stamina += potion.value;
                console.log(`${this.fullName} the ${potion.name} drinks and gains ${potion.value} points of stamina.`);
            }
            else if (potion.name === "Failed potion") {
                console.log(`${this.fullName} tries to drink a Failed potion but nothing happens.`);
            }
            else {
                this.health += 1;
                this.magick += 1;
                this.stamina += 1;
                console.log(`${this.fullName} drinks ${potion.name} and gains +1 to all attributes.`);
            }
    
            console.log(`Health:        ${this.health}`);
            console.log(`Magick:        ${this.magick}`);
            console.log(`Stamina:       ${this.stamina}`);
            console.log('------------------------------------------');
    
            if (this.health <= 0) {
                console.log(`${this.fullName} has lost all his hit points and died.`);
                break;
            }
            if (this.magick <= 0) {
                console.log(`${this.fullName} has lost all magic and perished.`);
                break;
            }
            if (this.stamina <= 0) {
                console.log(`${this.fullName} is completely exhausted and can move no more.`);
                break;
            }
        }
    
        if (this.potions.length <= 0) {
            console.log(`${this.fullName} has drunk all the potions available.`);
        }
    }    
}
