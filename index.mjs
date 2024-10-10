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
        const getRedBag = characterData.players[0].pouch_red;
        const getGreenBag = characterData.players[0].pouch_green;
        const getYellowBag = characterData.players[0].pouch_yellow;
        const getAgedBag = characterData.players[0].pouch_aged;
        const potionBag = PotionBag.create(getAgedBag, cauldron);
        const character = Character.from(characterData.players[0], potionBag.potions);

        showCharacter(character);
        character.drinkEmAll();
    } catch (error) {
    }
};

function showCharacter(character) {
    console.log(`${character.fullName}`);
    console.log('------------------------------------------');
    console.log(`Health:         ${character.health}`);
    console.log(`Magick:         ${character.magick}`);
    console.log(`Stamina:        ${character.stamina}`);    

    for(let i = 0; i < character.potions.length; i++){
        console.log(`Potion ${i + 1}:       ${character.potions[i].name}`);
    }
    console.log('------------------------------------------');
}

execute();
