let promise = new Promise((resolve, reject) => {
    //gera numero aleatório;
    let x = Math.random();

    //neste exemplo valores gerados a partir de 0.5 são aceitos (favoráveis)
    //Caso contrário, os valores são rejeitados (desvvoráveis)
    if (x >= 0.5) {
        resolve('Valor aceito: ' + x);
    } else {
        reject('Valor desfavorável: ' + x);
    }
});

//Execução
let texto = 'antes';

promise
    .then(p => {
        texto = 'durante';
        return '1ª then -> :' + p.toUpperCase();

    })
    .then(x => {
        texto = 'depois'
        console.log('2º then-> : ' + x);
    })
    .catch(console.error);
console.log(texto);