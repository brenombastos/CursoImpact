const Fornecedores = require('./fornecedores');

Fornecedores.methods(['get', 'post', 'put', 'delete']);
Fornecedores.updateOptions({ new: true, runValidators: true });

module.exports = Fornecedores;