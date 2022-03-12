// A partir dos lados de um retângulo ou quadrado,
// digitados pelo usuário, elaborar uma aplicação que
// calcule e exiba o valor da área da figura e informe se
// é um retângulo ou um quadrado. Lembrando que a
// área é obtida pela multiplicação da base (L) pela
// altura (A).

const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite o valor da altura da figura: ', (altura) => {
  teclado.question('Digite o valor da base da figura: ', (base) => {
    altura = JSON.parse(altura);
    base = JSON.parse(base);

    var area = altura * base;

    if (base == altura) {
      console.log(`A figura é um quadrado\n Área: ${area}`);
    } else {
      console.log(`A figura é um retângulo\nÁrea: ${area}`);
    }
  });
});