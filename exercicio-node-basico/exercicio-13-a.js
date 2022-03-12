const dataModule = require('./exercicio-13');

var conversaoDeData = new dataModule();
var minhaData = new Date();

console.log(conversaoDeData.data(minhaData));
console.log(conversaoDeData.hora(minhaData));
console.log(conversaoDeData.dataExtenso(minhaData));
