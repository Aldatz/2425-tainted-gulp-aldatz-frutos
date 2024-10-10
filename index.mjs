import { getData, getDataCharacter } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldrons from "./cauldron.mjs";
import PotionBag from "./PotionBag.mjs";
import Character from "./Character.mjs";

const execute = async () => {
    try {
        const data = await getData();
        const characterData = await getDataCharacter();
        const ingredients = Ingredients.load(data);
        const cauldron = new Cauldrons(ingredients);
        const getBag = characterData.players[0].pouch_yellow;
        const potionBag = PotionBag.create(getBag, cauldron);
        const character = Character.from(characterData.players[0], potionBag.potions);

        showCharacter(character);
    } catch (error) {
        console.error("Error ejecutando el código: ", error);
    }
};

function showCharacter(character) {
    console.log(`${character.fullName}`);
    console.log('------------------------------------------');
    console.log(`Health:         ${character.health}`);
    console.log(`Magick:         ${character.magick}`);
    console.log(`Stamina:        ${character.stamina}`);
    
    character.potions.forEach((potion, index) => {
        console.log(`Potion ${index + 1}:       ${potion.name}`);
    });
}

execute();
