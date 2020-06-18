const express = require('express');
const produtos = require('../ws/produtos/produtos');

module.exports = function (server) {
    //definição da URL base para todas as rotas

    const router = express.Router();
    server.use('/ws', router);

    //todas relacionadas aos models

    const Produtos = require("../ws/produtos/produtosService");

    Produtos.register(router, '/produtos');
    
}