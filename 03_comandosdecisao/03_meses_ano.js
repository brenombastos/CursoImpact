// Vamos criar uma lista contendo os dias de cada mês do ano.

let ano = 2020;

//Operador ternário
const MESES = [31, ano % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(MESES);

// Operador % - módulo ou resto da divisão
//operador == => comparação


// if (ano % 4 == 0) {
//     MESES[1] = 29;
// } else {
//     MESES[1] = 28;
// }

// MESES[1] = ano % 4 == 0 ? 29 : 28;

