const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extend: true });
const path = require('path');

const servidor = app.listen(3000, function() {
  let porta = servidor.address().port;
  console.log('Running at port: ', porta);
});

app.get('/', function(req, res) {
  fs.readFile('form.html', function(erro, dado) {
    res.write(dado);
    res.end();
  })
});

app.post('/preco', urlencodedParser, function(req, res) {
  fs.readFile('preco.html', function(erro, dado) {
    let precoVenda = parseFloat(req.body.precoUnitario) * parseFloat(req.body.quantidade);
    let precoFinal = precoVenda - parseFloat(req.body.desconto);

    dado = dado.toString().replace('{{ preco final }}', precoFinal);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(dado);
    res.end();
  });
});