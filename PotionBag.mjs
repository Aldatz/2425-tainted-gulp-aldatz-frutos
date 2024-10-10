import Cauldrons from "./cauldron.mjs";
import Potion from "./potion.mjs";

export default class PotionBag {
    constructor(potions) {
        this.potions = potions;
    }

    static create(ingredients, cauldron) {
        const potions = [];

        for (let i = 0; i < ingredients.length; i++) {
            for (let j = i + 1; j < ingredients.length; j++) {
                const ingredient1 = ingredients[i];
                const ingredient2 = ingredients[j];
                
                const potion = cauldron.createPotions(ingredient1, ingredient2);

                potions.push(potion);
            }
        }
        return new PotionBag(potions);
    }
}
