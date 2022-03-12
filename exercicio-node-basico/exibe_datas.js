// Criar um programa que mostre a data e hora atuais
// da maneira que é utilizada no Brasil, por exemplo:
// “25/01/2021 19:45”.
// ---------------------------------------------------------
// Criar um programa que mostre a data atual por
// extenso, por exemplo: “Hoje é sexta-feira, dia 26 de
// fevereiro de 2021”.

const moment = require('moment')

function exibeDataEHora() {
    var dataDeHoje = new Date();
    var dateFormatadaBr = moment(dataDeHoje).format('DD/MM/YYYY HH:MM:SS');

    return console.log(dateFormatadaBr);
}

function exibeDataEHoraPorExtenso() {
    var dataDeHoje = new Date();
    var momentLocale = moment.locale('pt-BR');
    var dateFormatadaBr = moment(dataDeHoje).format('LL');
   
    return console.log(dateFormatadaBr);
}

exibeDataEHora();
exibeDataEHoraPorExtenso();