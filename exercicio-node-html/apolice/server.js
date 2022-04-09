var fs = require('fs');
var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var path = require('path');


var servidor = app.listen(3000, function() {
  var porta = servidor.address().port;
  console.log('Running at port: ', porta);    
});

app.get('/', function(req, res) {
  fs.readFile('form.html', function(erro, dado) {
      res.write(dado);
      res.end();
  }); 
});

app.post('/apolice', urlencodedParser, function(req, res){
  fs.readFile('form.html', function(erro, dado) {
    let nomeSegurado = req.body.nomeSegurado,
        sexo = req.body.sexo,
        anoNascimento = parseInt(req.body.anoNascimento),
        marca = req.body.marca,
        modelo = req.body.modelo,
        anoFabricacao = parseInt(req.body.anoFabricacao),
        valorVeiculo = parseFloat(req.body.valorVeiculo),
        bonus = parseFloat(req.body.bonus)

    var dataHoje = new Date;
    var anoAtual = dataHoje.getFullYear;
    let idade = anoAtual - anoNascimento;

    var valorApolice = 0;

    if (anoFabricacao >= 2010) {
      valorApolice = valorVeiculo * 1.25 / 100;
    } else if (anoFabricacao >= 2000 && anoFabricacao <= 2009) {
      valorApolice = valorVeiculo * 1.75 / 100;
    } else if (anoFabricacao >= 1980 && anoFabricacao <= 1999) {
      valorApolice = valorVeiculo * 2 / 100;
    } else {
      valorApolice = valorVeiculo * 2.5 / 100;
    }

    if (sexo == 'M') {
      valorApolice = valorApolice * 1.05;
    } else {
      valorApolice = valorApolice * 0.90;
    }

    if (idade < 30 || idade > 60 ) {
      valorApolice = valorApolice * 1.2;
    }

    desconto = valorApolice * bonus / 100;
    valorApolice = valorApolice - desconto;

    dado = dado.toString().replace(`{{ Valor Apólice }}`, valorApolice);
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(dado);
    res.end();
  });
}); 