// Implementar um módulo que apresente as seguintes
// funções:
// • data (dt) - retornar a data, passada como
// parâmetro, no formato dd/mm/aaaa.
// • hora(dt) - retornar a hora, a partir de uma data
// passada como parâmetro, no formato hh:mm.
// • dataExtenso(dt) - retornar a data, passada como
// parâmetro, por extenso, por exemplo: sexta-
// feira, 26 de fevereiro de 2021.

const dataModule = require('./data_module');

var conversaoDeData = new dataModule();
var minhaData = new Date();

console.log(conversaoDeData.data(minhaData));
console.log(conversaoDeData.hora(minhaData));
console.log(conversaoDeData.dataExtenso(minhaData));
