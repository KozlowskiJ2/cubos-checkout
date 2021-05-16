const fs = require('fs/promises');
const produtos = async (req, res) => {
    const categoria = req.query.categoria;
    const pInicial = Number(req.query.precoInicial);
    const pFinal = Number(req.query.precoFinal);
    const lista = await fs.readFile('./data.json');
    const dados = JSON.parse(lista);
    if (!categoria && !pInicial && !pFinal) {
        const estoque = dados.produtos.filter(a => a.estoque > 0);
        res.json(estoque);
    } else if (categoria && !pInicial && !pFinal) {
        const estoque = dados.produtos.filter(a => a.estoque > 0);
        const filtro = estoque.filter(a => {
            if (a.categoria === categoria) {
                return true;
            } else {
                return false
            }
        });
        res.json(filtro);

    } else if (!categoria && pInicial && pFinal) {
        const estoque = dados.produtos.filter(a => a.estoque > 0);
        const filtro = estoque.filter(a => {
            if (pInicial <= a.preco && a.preco <= pFinal) {
                return true;
            }
        });
        console.log(pInicial + 1)
        res.json(filtro);
    } else {
        const filtroPreco = dados.produtos.filter(a => {
            if (pInicial <= a.preco && a.preco <= pFinal) {
                return true;
            } else {
                return false
            }
        })
        const filtro = filtroPreco.filter(a => {
            if (a.categoria === categoria) {
                return true;
            } else {
                return false
            }
        });
        res.json(filtro);
    }
    ;

}
    ;

module.exports = produtos;