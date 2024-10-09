import fetch from 'node-fetch';

const getData = async () => {
    try {
        const result = await fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json');
        const data = await result.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}


export {getData}