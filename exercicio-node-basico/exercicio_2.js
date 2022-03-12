// Desenvolver um programa para uma determinada
// loja que precisa calcular o preço de venda de um
// produto. O cálculo deverá ser efetuado através da
// multiplicação do preço unitário pela quantidade
// vendida e, posteriormente, subtrair o valor do
// desconto. Considerar todas as variáveis do tipo de
// dado real, que serão digitadas pelo usuário.

const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite quantidade do produto: ', (qtdProduto) => {
  teclado.question('Digite o valor do produto: ', (valorProduto) => {
    var valorTotal = qtdProduto * valorProduto;

    console.log('Valor Total da Venda: ' + valorTotal);
    teclado.close;
  });
});