const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const moment = require('moment');

const servidor = app.listen(3000, function() {
  let porta = servidor.address().port;
  console.log('Running at port: ', porta);
});

app.get('/', function(req, res) {
  fs.readFile('data.html', function(erro, dado) {
    let currentDate = moment(new Date).format('DD/MM/YYYY HH:mm:ss');
 
    dado = dado.toString().replace('{{ data }}', currentDate);
    res.write(dado);
    res.end();
  })
});
