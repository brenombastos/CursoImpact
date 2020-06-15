let data = new Date();
let ano = data.getFullYear;
let meses = [
    { mes: "Janeiro", dias: 31 },
    { mes: "Fevereiro", dias: ano % 4 == 0 ? 29 : 28 },
    { mes: "Março", dias: 31 },
    { mes: "Abril", dias: 30 },
    { mes: "Maio", dias: 31 },
    { mes: "Junho", dias: 30 },
    { mes: "Julho", dias: 31 },
    { mes: "Agosto", dias: 31 },
    { mes: "Setembro", dias: 30 },
    { mes: "Outubro", dias: 31 },
    { mes: "Novembro", dias: 30 },
    { mes: "Dezembro", dias: 31 }
];

let lista = document.getElementById('meses');

let listarMeses = function () {
    for (let i = 0; i < meses.length; i++) {
        let option = document.createElement('option');
        option.textContent = meses[i].mes;
        option.setAttribute('value', i);
        lista.appendChild(option);

    }
    return lista;
}

listarMeses();

let calculaAno = function (dia, mes) {
    //const MESES = [31, ano % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //Calcular quantos dias restam para terminar o mês em questão.
    //Verificando se o dia é adequado para o mes selecionado

    if (dia < 1 || dia > meses[mes].dias) {
        throw TypeError("Dia invalido para o mês selecionado");
    }

    let diasRestantes = meses[mes].dias - dia;
    for (let i = mes + 1; i < meses.length; i++) {
        diasRestantes = diasRestantes + meses[i].dias;
    }
    return diasRestantes;
}

document.getElementById('calcularDias').addEventListener('click', function () {
    try {
        let dia = parseInt(document.getElementById('dia').value);
        let mes = parseInt(document.getElementById('meses').value);

        document.getElementById('resposta').innerHTML = "Restam: " + calculaAno(dia, mes) + " dias";
    } catch (error) {
        //window.alert("Ocorreu o seguinte erro: " + error);
        document.getElementById('resposta').innerHTML = error;
    }


});