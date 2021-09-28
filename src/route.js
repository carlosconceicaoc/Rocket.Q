// Arquivo de rotas
const express = require('express'); // Import do express

const route = express.Router(); 

route.get('/', (req, res) => res.render("index")) // O dominio '/' apontando para o index

module.exports = route; // Exportando a constante route