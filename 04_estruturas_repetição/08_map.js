let cursos = [
    { 'nome': 'DevOps', 'ch': 40, 'disponivel': false },
    { 'nome': 'Matemática', 'ch': 120, 'disponivel': true },
    { 'nome': 'Estatística', 'ch': 80, 'disponivel': true },
    { 'nome': 'PHP', 'ch': 40, 'disponivel': false },
    { 'nome': 'Scrum', 'ch': 32, 'disponivel': true },

];

let listaCursos = cursos.map((item, indice) => {
    return indice + " - " + item.nome + (item.disponivel ? ' - Está disponivel:' : ' - Não está disponivel ');
});

console.log(listaCursos);


//Obter uma nova lista a partir de cursos, que mostrem o nome do curso a carga horaria, e o texto 'Curso longo' apenas se o curso tiver mais de 40 horas
//Exemplo: DevOps, Matematica: Curso Longo

let cursoCargaHoraria = cursos.map((item, indice) => {
    return indice + " - " + item.nome + (item.ch > 40 ? ': Curso longo' : ' ');
});

console.log(cursoCargaHoraria);