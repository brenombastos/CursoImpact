const port = 3200;

const bodyParser = require('body-parser');
const express = require('express');

const server = express(); //Novo server
const allowCors = require('./cors');

//Usamos o bodyParser para interpretar as requisições no formato urlencoded
server.unsubscribe(bodyParser.urlencoded({ extended: true }))


//considera o formato 
server.use(bodyParser.json());
server.use(allowCors);


server.listen(port, function () {
    console.log(`Servidor no ar, na porta ${port}`);
});

module.exports = server;