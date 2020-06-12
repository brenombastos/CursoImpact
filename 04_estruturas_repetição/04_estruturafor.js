let cursos = [
    { 'nome': 'DevOps', 'ch': 40, 'disponivel': false },
    { 'nome': 'Matemática', 'ch': 120, 'disponivel': true },
    { 'nome': 'Estatística', 'ch': 80, 'disponivel': true },
    { 'nome': 'PHP', 'ch': 40, 'disponivel': false },
    { 'nome': 'Scrum', 'ch': 32, 'disponivel': true },

];


console.log("\n Lista de cursos disponíveis ")
for (let i = 0; i < cursos.length; i++) {
    if (cursos[i].disponivel) {
        console.log(cursos[i].nome);
    }
}