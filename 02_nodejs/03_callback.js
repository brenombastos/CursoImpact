//Função principal
function executar(operacao) {
    return operacao(2, 3);
}

//Executando a função principal via função anonima.
let valor1 = executar(function (x, y) {
    return x + y; //soma
});

let valor2 = executar(function (a, b) {
    return a * b; //multiplicação
});

let valor3 = executar(function (c, d) {
    return "Valores informados: " + c + " e " + d; //texto (string)
});

let valor4 = executar(function (x, y) {
    return x > y; //boolean
});

console.log("Valor1 = " + valor1);
console.log("Valor2 = " + valor2);
console.log("Valor3 = " + valor3)
console.log("Valor4 = " + valor4)