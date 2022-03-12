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