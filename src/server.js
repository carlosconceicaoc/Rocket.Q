const porta = 3000;

const express = require('express');
// É possível usar o route pois o mesmo foi exportado module.exports = route
const route = require('./route'); // Importando o arquivo onde foram definidas as rotas
const path = require('path');
const server = express();

// Configurando a view engine - falando para o node que a view engine será o ejs
server.set('view engine', 'ejs');
// Express vai procurar os conteúdos na raiz do projeto, na pasta public (conteúdo estático)
server.use(express.static("public"));

server.set('views', path.join(__dirname, 'views')); //dirname = src/

server.use(route); // Sinalizando a rota criada para o node

server.listen(porta, () => { // Ouvindo a porta 3000
    console.log(`RODANDO NA PORTA ${porta}`);
});