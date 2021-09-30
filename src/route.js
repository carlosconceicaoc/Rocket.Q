// Arquivo de rotas
const express = require('express'); // Import do express

const route = express.Router(); 

route.get('/', (req, res) => res.render("index")); // O dominio '/' apontando para o index
route.get('/room', (req, res) => res.render("room")); // Criando demais rotas
route.get('/create-pass', (req, res) => res.render("create-pass"));

module.exports = route; // Exportando a constante route