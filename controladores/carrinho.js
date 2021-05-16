const fs = require('fs/promises');
const datefns = require('date-fns')
const verificaCarrinho = async (req, res) => {
    const carrinho = await fs.readFile('./carrinho.json');
    const dados = JSON.parse(carrinho);
    res.json(dados)
}
const criarCarrinho = async (req, res) => {
    const carrinho = await fs.readFile('./carrinho.json');
    const lista = fs.readFile('./data.json')
    const dados = JSON.parse(carrinho);
    const dados2 = JSON.parse(lista);
    const id = req.body.id;
    const quant = req.body.quantidade;
    const produtos = dados2.produtos;
    const produto = lista.find(p => p.id === id);
    const estoque = produto.estoque >= quant
    if (!dados.produtos.find(p => p.id === id) && estoque) {
        const data = datefns.addBusinessDays(new Date(), 15);
        const novoCarrinho = {
            subTotal: 1518,
            dataDeEntrega: data,
            valorDoFrete: 5000,
            totalAPagar: 6518,
            produtos: [
                {
                    "id": 3,
                    "quantidade": 1,
                    "nome": "Limpador Cif Multiuso 800g Em Pó",
                    "preco": 999,
                    "categoria": "Limpeza"
                },
                {
                    "id": 5,
                    "quantidade": 1,
                    "nome": "Biscoito BAUDUCCO Choco Biscuit Leite 80g",
                    "preco": 519,
                    "categoria": "Bazar"
                }
            ]
        }
    }
}


}

module.exports = { verificaCarrinho, criarCarrinho };