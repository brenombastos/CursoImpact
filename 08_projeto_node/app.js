let moment = require('moment');

//documentação: momentjs.com

moment.locale('pt-br');
let data = moment(); //obtem a data atual (momento atual)

data.add(2, "hour"); // adiciona duas horas a hora atual
data.add(-1, "year"); // removemos 1 ano em relação ao ano do objeto

console.log(data);
console.log(data.format('DD/MM/YYYY HH:mm'));

console.log(data.date());//Retorna o dia
console.log(data.month());//retorna o mes
console.log(data.year());//Retorna o ano
console.log(data.hour());//retorna a hora
console.log(data.minute());//retorna os minutos
console.log(data.second());// retorna o segundo


let dataInicioCurso = moment("2020-06-10");

console.log(dataInicioCurso.format('DD/MM/YYYY'));
console.log(dataInicioCurso.format('LLLL'));
