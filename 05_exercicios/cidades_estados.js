let Estados = [
    { codigo: 0, estado: "Acre" },
    { codigo: 1, estado: "Alagoas" },
    { codigo: 2, estado: "Amapá" },
    { codigo: 3, estado: "Amazonas" },
    { codigo: 4, estado: "Bahia" },
    { codigo: 5, estado: "Ceará" },
    { codigo: 6, estado: "Distrito Federal*" },
    { codigo: 7, estado: "Espirito Santo" },
    { codigo: 8, estado: "Goiás" },
    { codigo: 9, estado: "Maranhão" },
    { codigo: 10, estado: "Mato Grosso" },
    { codigo: 11, estado: "Mato Grosso do Sul" },
    { codigo: 12, estado: "Minas Gerais" },
    { codigo: 13, estado: "Pará" },
    { codigo: 14, estado: "Paraíba" },
    { codigo: 15, estado: "Paraná" },
    { codigo: 16, estado: "Pernambuco" },
    { codigo: 17, estado: "Piauí" },
    { codigo: 18, estado: "Rio de Janeiro" },
    { codigo: 19, estado: "Rio Grande do Norte" },
    { codigo: 20, estado: "Rio Grande do Sul" },
    { codigo: 21, estado: "Rondônia" },
    { codigo: 22, estado: "Roraima" },
    { codigo: 23, estado: "Santa Catarina" },
    { codigo: 24, estado: "São Paulo" },
    { codigo: 25, estado: "Sergipe" },
    { codigo: 26, estado: "Tocantins" },
];

let cidadesBrasil = [
    { codigo: 0, codestado: 21, cidade: "Porto Velho" },
    { codigo: 1, codestado: 0, cidade: "Rio Branco" },
    { codigo: 2, codestado: 3, cidade: "Manaus" },
    { codigo: 3, codestado: 22, cidade: "Boa Vista" },
    { codigo: 4, codestado: 13, cidade: "Belém" },
    { codigo: 5, codestado: 2, cidade: "Macapá" },
    { codigo: 6, codestado: 26, cidade: "Palmas" },
    { codigo: 7, codestado: 9, cidade: "São Luís" },
    { codigo: 8, codestado: 17, cidade: "Teresina" },
    { codigo: 9, codestado: 5, cidade: "Fortaleza" },
    { codigo: 10, codestado: 19, cidade: "Natal" },
    { codigo: 11, codestado: 14, cidade: "João Pessoa" },
    { codigo: 12, codestado: 16, cidade: "Recife" },
    { codigo: 13, codestado: 1, cidade: "Maceió" },
    { codigo: 14, codestado: 25, cidade: "Aracaju" },
    { codigo: 15, codestado: 4, cidade: "Salvador" },
    { codigo: 16, codestado: 14, cidade: "Belo Horizonte" },
    { codigo: 17, codestado: 7, cidade: "Vitória" },
    { codigo: 18, codestado: 18, cidade: "Rio de Janeiro" },
    { codigo: 19, codestado: 24, cidade: "São Paulo" },
    { codigo: 20, codestado: 15, cidade: "Curitiba" },
    { codigo: 21, codestado: 23, cidade: "Florianópolis" },
    { codigo: 22, codestado: 20, cidade: "Porto Alegre" },
    { codigo: 23, codestado: 11, cidade: "Campo Grande" },
    { codigo: 24, codestado: 10, cidade: "Cuiabá" },
    { codigo: 25, codestado: 8, cidade: "Goiânia" },
    { codigo: 26, codestado: 6, cidade: "Brasília" }
];

let listEstado = document.getElementById('Estados');

let listarEstados = function () {
    for (let i = 0; i < Estados.length; i++) {
        let option = document.createElement('option');
        option.textContent = Estados[i].estado;
        option.setAttribute('value', i);
        listEstado.appendChild(option);
    }
}

listarEstados();

listEstado.addEventListener("change", function () {

    let codigoestado = listEstado.value;

    listCidade = cidadesBrasil.filter(c => c.codestado == codigoestado);

    selectCidades = document.getElementById('Cidades');

    while (selectCidades.firstChild) {
        selectCidades.removeChild(selectCidades.firstChild);
    }

    for (let i = 0; i < cidadesBrasil.length; i++) {
        let option = document.createElement('option');
        option.textContent = cidadesBrasil[i].cidade;
        option.setAttribute('value', i);
        selectCidades.appendChild(option);

    }
});