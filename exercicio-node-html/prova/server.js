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
    let precoUnitario = parseFloat(req.body.precoUnitario);
    let quantidade = parseFloat(req.body.quantidade);

    let impostoBruto = 0;
    let desconto = 0;
    let precoFinal = 0;

    let precoBruto = precoUnitario * quantidade;

    if (precoBruto < 500) {
      impostoBruto = 0.025;

    } else if (precoBruto >= 500 && precoBruto < 1500) {
      impostoBruto = 0.05;

    }  else if (precoBruto >= 1500 && precoBruto < 5000) {
      impostoBruto = 0.0825;
      desconto = 0.045;

    } else if (precoBruto >= 5000) {
      impostoBruto = 0.25125;
      desconto = 0.045;
    }

    let valorDesconto = desconto * precoBruto;
    let valorImposto = impostoBruto * precoBruto;

    precoFinal = (precoBruto + valorImposto) - valorDesconto;
    
    dado = dado.toString().replace('{{ preco final }}', precoFinal);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(dado);
    res.end();
  });
});