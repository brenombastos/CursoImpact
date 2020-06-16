document.getElementById('mostrarEndereco').addEventListener('click', function () {
    let cep = document.getElementById('cep').value;

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let resposta = {};


    fetch(url)
        .then(res => {
            let x = res.json();
            return x;
        })
        .then(valor => {
            resposta = valor;
            document.getElementById('logradouro').value = resposta.logradouro;
            document.getElementById('localidade').value = resposta.localidade;
        });
});



