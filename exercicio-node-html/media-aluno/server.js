
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
  
  // app.use(express.static(path.join(__dirname, '/')));
});

app.post('/media', urlencodedParser, function(req, res){
  fs.readFile('form.html', function(erro, dado) {
    var soma = parseFloat(req.body.nota1) + parseFloat(req.body.nota2);
    var media = soma / 2;
    var situacaoAluno = '';

    if (media >= 6) {
      situacaoAluno = 'Aprovado';
    } else {
      situacaoAluno = 'Reprovado';
    }

    var valores = {
      'media': media,
      'situacaoAluno': situacaoAluno
    };

    for(var chave in valores) {
      dado = dado.toString().replace(`{{ ${chave} }}`, valores[chave]);
    }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(dado);
    res.end();
  });
}); 