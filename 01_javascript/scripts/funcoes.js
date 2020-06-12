function calcular() {
    let funcionario = document.getElementById("nomeFuncionario").value;
    let salario = parseFloat(document.getElementById("salario").value);
    let imposto = (salario * (15 / 100));

    let total = salario - imposto;

    let mensagem = "Funcionario: " + funcionario +
        "<br/>" + "Salário: " + salario +
        "<br/>" + "Imposto: " + imposto +
        "<br/>" + "Total: " + total;

    document.getElementById("resposta").innerHTML = mensagem;
}

function calcularSoma() {
    let v1 = 0;
    let v2 = 0;
    v1 = parseFloat(document.getElementById("valor1").value);
    v2 = parseFloat(document.getElementById("valor2").value);

    let resultSoma = v1 + v2;
    //Exibir resultado na tela
    //forma 1 console
    console.log("Soma igual: " + resultSoma);
    //forma 2 alert
    window.alert("Soma igual: " + resultSoma);
    //forma 3 
    document.getElementById("resposta").innerHTML = "Soma: " + resultSoma;
}
