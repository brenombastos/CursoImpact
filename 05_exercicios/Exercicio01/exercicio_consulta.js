let resposta = document.getElementById('resposta');

let tabela = [];

document.getElementById('mostrarEndereco').addEventListener('click', function () {

    let cep = document.getElementById('cep').value;
    let url1 = `https://viacep.com.br/ws/${cep}/json/`;
    let resposta = {};

    //let url2 = `https://viacep.com.br/ws/${estado}/${localidade}/${logradouro}/json/`;

    fetch(url1)
        .then(res => {
            let x = res.json();
            tabela = x;
            return x;
        })
        .then(valor => {
            resposta = valor;
            document.getElementById('estado').value = resposta.uf;
            document.getElementById('localidade').value = resposta.localidade;
            document.getElementById('cep').value = resposta.cep;
            document.getElementById('logradouro').value = resposta.logradouro;
            tabela.push(resposta);
        })
        .then(resp => {
            tabela[tabela.length] = resp;
            console.log(tabela);
        })
});
document.getElementById('exibirEndereco').addEventListener('click', function () {


    let localidade = document.getElementById('localidade').value;
    let bairro = document.getElementById('bairro').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let mensagem = "";

    let listarBusca = tabela
        .filter(s => s.bairro == bairro
            || s.localidade == localidade
            || s.uf == estado
            || s.cep == cep);

    for (const item of listarBusca) { //estrutura posicional
        mensagem = '<br/> <span>Nome:</span> <br/> <input type="text" value="' + item.logradouro +
            '"><br/><span>Localidade:</span><br/> <input type="text" value="' + item.localidade + '"><br/><br/>' + mensagem;
    }
    document.getElementById("resposta").innerHTML = mensagem;

});
