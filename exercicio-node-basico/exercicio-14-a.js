const compareModule = require('./exercicio-14');

var minhaComparacao = new compareModule();
var meuArray = [5, 4, 8, 3];

console.log(minhaComparacao.media(meuArray));
console.log(minhaComparacao.menor(meuArray));
console.log(minhaComparacao.maior(meuArray));