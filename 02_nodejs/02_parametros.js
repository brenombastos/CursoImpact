//Neste programa, estudaremos o comportamento e o tipó esperado dos parametros das funções
//Parâmetro de funções: informação (valor) complementar para que a função seja executada.
function executarSoma(v1, v2) {
    let soma = v1 + v2;
    return soma;
}

function mostrarTamnho(s) {
    return s.length;
}

function executar(operacao) {
    return operacao(2, 3);
}


console.log("Função executar soma: " + executarSoma(20, 35));
console.log("Função mostrar tamanho: " + mostrarTamnho(100));



//console.log(executarSoma("Breno ", "Bastos"));