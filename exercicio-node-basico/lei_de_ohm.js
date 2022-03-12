// A Lei de Ohm define que a resistência (R) de um
// condutor é obtida através da divisão da tensão
// aplicada (V) dividida pela intensidade de corrente
// elétrica (A). Desta forma, a partir de uma tensão e
// corrente, digitadas pelo usuário, calcular e mostrar o
// valor da resistência.

const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite o valor da tensão(V): ', (tensao) => {
  teclado.question('Digite o valor da corrente(A): ', (corrente) => {
    var resistencia = tensao / corrente;

    console.log('Valor da Resistência: ' + resistencia);
    teclado.close;
  });
});