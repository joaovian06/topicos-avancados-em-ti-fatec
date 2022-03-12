const moment = require('moment')

moment.locale('pt-BR');

function dataModule() {
    this.data = function(dateParam) {
        var formatedDate = moment(dateParam).format('L');
        return formatedDate;
    }

    this.hora = function(dateParam) {
        var formatedHour = moment(dateParam).format('HH:mm');
        return formatedHour;
    }

    this.dataExtenso = function(dateParam) {
        var formatedDate = moment(dateParam).format('LLLL');
        return formatedDate;
    }
}

module.exports = dataModule;
