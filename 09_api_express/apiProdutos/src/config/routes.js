const express = require('express');
const produtos = require('../ws/produtos/produtos');

module.exports = function (server) {
    //definição da URL base para todas as rotas
    const router = express.Router();
    server.use('/ws', router);

    //todas urls relacionadas aos models

    const Produtos = require("../ws/produtos/produtosService");
    Produtos.register(router, '/produtos');

    const Fornecedores = require("../ws/fornecedores/fornecedoresService");
    Fornecedores.register(router, '/fornecedores');

}