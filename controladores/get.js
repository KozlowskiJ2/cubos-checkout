const fs = require('fs/promises');
const produtos = async (req,res) => {

    const lista = await fs.readFile("data.json")
    return JSON.parse(lista);
};
produtos().then => console.log(produtos())
module.exports = produtos