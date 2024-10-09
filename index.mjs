import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldrons from "./cauldron.mjs";

const execute = async () => {
    try {
        const data = await getData();

        const ingredients = Ingredients.load(data);

        const cauldron = new Cauldrons(ingredients);

        const potion1 = cauldron.createPotions("Bear Claws", "Bee");
        showPotion(potion1)
        const potion2 = cauldron.createPotions("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2)
        const potion3 = cauldron.createPotions("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3)
        const potion4 = cauldron.createPotions("Nightshade", "Ectoplasm");
        showPotion(potion4)

        function showPotion(potion){
            console.log(`${potion.name}`);
            console.log(`Value:         ${potion.value}`);
            console.log(`Weight:        ${potion.weight}`);
            console.log(`Time:          ${potion.time}`);
            console.log(`-------------------------`);
        }

    } catch (error) {
        console.error("Error ejecutando el código: ", error);  // Mostrar el error en consola
    }
}

execute();
