const restful = require('node-restful');
const mongoose = restful.mongoose;

//definindo o Schema

const fornecedoresSchema = new mongoose.Schema({
    cnpj: { type: String, required: true, min: 14, max: 14 },
    nome: { type: String, required: true },
    dataCadastro: { type: Date },
    endereco: { type: String },
    email: { type: String }
});

module.exports = restful.model('fornecedores', fornecedoresSchema);