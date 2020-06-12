let cursos = ['DevOps', 'Matemática', 'Esttística', 'PHP', 'Scrum'];

cursos.sort();    //Coloca a lista em ordem


console.log("\nLista de cursos disponíveis ")
for (let i = 0; i < cursos.length; i++) {
    console.log(`Curso ${i}: ` + cursos[i]);

}