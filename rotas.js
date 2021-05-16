const express = require('express');
const rota = express();
const produtos = require('./controladores/produtos');
const verificaCarrinho = require('./controladores/carrinho');
const fs = require('fs/promises');

rota.get('/produtos', produtos);
rota.get('/carrinho', verificaCarrinho);
rota.post('/carrinho/produtos',);
rota.post('/finalizar-compra',);
rota.patch('/carrinho/produtos/:idProduto',);
rota.delete('/carrinho/produtos/:idProduto',);
rota.delete('/carrinho/',);

module.exports = rota;