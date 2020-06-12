//Definindo uma lista (array).
//01 - Lista de nomes
let nomes = ['Breno', 'Maria', 'Joaquim', 'Osvaldo', 'Marlene'];

//02 - Lista de numeros
let numeros = [2, 8, 7, 10, 15, 23];

//03 - Dias da semana

let dias = ['dom', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']

//-------------------------------
//Definindo objetos
let endereco = {
    'logradouro': 'Alameda Araguaia',
    'numero': 1930,
    'Cidade': 'Barueri',
    'num_funcioarios': 5000
};

let funcionario = {
    'nome': 'Joaquin',
    'cargo': 'Analista',
    'idade': 32,
    'endereco': endereco
};


let empresa = {
    'nome': 'Capgemini',
    'endereco': endereco,
    'colaboradores': nomes
}
exports.listaNomes = function () {
    return nomes;
}

exports.diasSemana = dias;

exports.buscarEmpresa = () => empresa;

