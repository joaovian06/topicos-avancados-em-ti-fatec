// Desenvolver uma aplicação Node.js que receba
// quatro números reais digitados pelo usuário, calcule
// e exiba a valor da média desses números.

const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


teclado.question('Digite o primeiro valor: ', (valor1) => {
  teclado.question('Digite o segundo valor: ', (valor2) => {
    teclado.question('Digite o terceiro valor: ', (valor3) => {
      teclado.question('Digite o quarto valor: ', (valor4) => {
        var soma = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4);
        var media = soma / 4;
        console.log('A média dos valores é: ' + media);
        teclado.close();
      });
    });
  });
});
