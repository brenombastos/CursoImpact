let cursos = [
    { 'nome': 'DevOps', 'ch': 40, 'disponivel': false },
    { 'nome': 'Matemática', 'ch': 120, 'disponivel': true },
    { 'nome': 'Estatística', 'ch': 80, 'disponivel': true },
    { 'nome': 'PHP', 'ch': 40, 'disponivel': false },
    { 'nome': 'Scrum', 'ch': 32, 'disponivel': true },

];


console.log("\n Lista de cursos disponíveis ")

for (const item of cursos) {        //estrutura posicional: item -> elemento da coleção; cursos -> coleção
    console.log(item.nome);
    console.log(item.ch);
}