const express = require('express');
const app = express();

app.get('/produtos',);
app.get('/carrinho',);
app.post('/carrinho/produtos',);
app.post('/finalizar-compra',);
app.patch('/carrinho/produtos/:idProduto',);
app.delete('/carrinho/produtos/:idProduto',);
app.delete('/carrinho/',);