//Função principal
function executar(operacao) {
    return operacao(2, 3);
}

//Executando a função principal via arrow function
let valor1 = executar((x, y) => x + y); //soma

let valor2 = executar((a, b) => a * b); //multiplicação

let valor3 = executar((c, d) => "Valores informados: " + c + " e " + d); //texto (string)

let valor4 = executar((x, y) => x > y); //boolean

console.log("Valor1 = " + valor1);
console.log("Valor2 = " + valor2);
console.log("Valor3 = " + valor3);
console.log("Valor4 = " + valor4);