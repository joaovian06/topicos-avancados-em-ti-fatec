// Considerando   um   número   inteiro
// digitado   pelo usuário,  calcular e
// exibir  o  valor da  sua  fatorial.
// Por exemplo, se o usuário digitar 4,
// temos que a fatorial é 4 x 3 x 2 x 1, isto é, 24.

const readline = require('readline');

const teclado = readline.createInterface({
    input: process.stdin,output: process.stdout
});

teclado.question('Digite um numero: ', (numero) => {
    numeroBase = numero;

    resultado = 1;
    count = 1;

    while (count <= numero) {
        resultado *= count;
        count++;

        console.log(resultado);
    }
});