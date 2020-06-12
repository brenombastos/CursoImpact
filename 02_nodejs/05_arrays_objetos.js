//Definindo uma lista (array).
//01 - Lista de nomes
let nomes = ['Breno', 'Maria', 'Joaquim', 'Osvaldo', 'Marlene'];

//02 - Lista de numeros
let numeros = [2, 8, 7, 10, 15, 23];

console.log(nomes);
console.log(numeros);

//-------------------------------
//Definindo objetos
let endereco = {
    'logradouro': 'Alameda Araguaia',
    'numero': 1930,
    'Cidade': 'Barueri',
    'num_funcioarios': 5000
};

console.log(endereco);

let funcionario = {
    'nome': 'Joaquin',
    'cargo': 'Analista',
    'idade': 32,
    'endereco': endereco
};

console.log(funcionario);

let empresa = {
    'nome': 'Capgemini',
    'endereco': endereco,
    'colaboradores': nomes
}

console.log(empresa)