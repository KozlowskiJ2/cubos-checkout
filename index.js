const express = require('express');
const fs = require('fs/promises');
const app = express();
const rota = require('./rotas');
app.use(express.json());
app.use(rota);
app.listen(8000);