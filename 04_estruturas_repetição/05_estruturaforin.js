let cursos = [
    { 'nome': 'DevOps', 'ch': 40, 'disponivel': false },
    { 'nome': 'Matemática', 'ch': 120, 'disponivel': true },
    { 'nome': 'Estatística', 'ch': 80, 'disponivel': true },
    { 'nome': 'PHP', 'ch': 40, 'disponivel': false },
    { 'nome': 'Scrum', 'ch': 32, 'disponivel': true },

];


console.log("\n Lista de cursos disponíveis ")
for (const i in cursos) {   //Estrutura posicional: i -> indice; cursos -> coleção
    console.log(cursos[i].nome);
    console.log(cursos[i].ch);
}