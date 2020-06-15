let cursos = [
    { 'nome': 'DevOps', 'ch': 40, 'disponivel': false },
    { 'nome': 'Matemática', 'ch': 120, 'disponivel': true },
    { 'nome': 'Estatística', 'ch': 80, 'disponivel': true },
    { 'nome': 'PHP', 'ch': 40, 'disponivel': false },
    { 'nome': 'Scrum', 'ch': 32, 'disponivel': true },

];

let cursosDisponiveis = [];
console.log("\n Lista de cursos disponíveis ")
//Filtrando elementos manualmente
// for (let i = 0; i < cursos.length; i++) {
//     if (cursos[i].disponivel) {
//         cursosDisponiveis.push(cursos[i]);
//     }
// }
//usando a função filter

//busca os elementos com a propriedade disponivel igual a true, e faz o push na lista
cursosDisponiveis = cursos.filter(retorno => retorno.disponivel == true);
console.log(cursosDisponiveis);

//Outro exemplo: buscando os elementos com caraga horaria > 40
console.log("Cursos com carga horaria maior que 40:")
let cursosChMaior40 = cursos.filter(retorno => retorno.ch > 40);
console.log(cursosChMaior40)

//Mais um exemplo buscando os elementos com a descrição contendo a letra 'm', e com mais de 6 caracteres
//&& operador E lógico
let cursosComM = cursos.filter(s => s.nome.includes('m') && s.nome.length > 6);
console.log(cursosComM);