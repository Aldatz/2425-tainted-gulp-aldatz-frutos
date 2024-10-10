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

const getDataCharacter = async () => {
    try {
        const characterResult = await fetch('https://gist.githubusercontent.com/oscar1771/3f27e083e980d9d8357294c2d7387fc0/raw/0296abf13d206454d18f88d8283c114be8d96d2e/joseph.json');
        const characteData = await characterResult.json();
        return characteData;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}


export {getData}
export {getDataCharacter}