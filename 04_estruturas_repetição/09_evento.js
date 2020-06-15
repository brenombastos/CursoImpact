let botao1 = document.getElementById("calcularDias");
botao1.addEventListener('click', function () {
    document.getElementById('resposta').innerHTML = "Restam: " + calculaAno() + " dias";
});