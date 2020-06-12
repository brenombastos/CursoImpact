/*
    Uma empresa desconta 6% de vale transporte sobre o salario de um funcionário, somenete se este valor for menor que o valor gasto com transporte.
    O programa a seguir deve apresentar, com base noo salário, o valor descontado com vale transporte.

*/
let salario = 1000.0;
let transporte = 150.0;


let vt = salario * 0.06;

if (vt > transporte) {
    vt = transporte;
}

let mensagem = `Salário: ${salario}\nVale transporte: ${vt}`;

console.log(mensagem);