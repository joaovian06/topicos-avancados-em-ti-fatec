// Desenvolver um módulo que possua as seguintes
// funções:
// • media (vetor) - retornar a média dos valores
// contidos em um vetor passado como parâmetro.
// • menor (vetor) - retornar o menor valor contido
// no vetor passado como parâmetro.
// • maior (vetor) - retornar o maior valor contido em
// um vetor passado como parâmetro.

const compareModule = require('./compare_module');

var minhaComparacao = new compareModule();
var meuArray = [5, 4, 8, 3];

console.log(minhaComparacao.media(meuArray));
console.log(minhaComparacao.menor(meuArray));
console.log(minhaComparacao.maior(meuArray));