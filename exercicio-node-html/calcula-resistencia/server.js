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

app.post('/resistencia', urlencodedParser, function(req, res){
  fs.readFile('resistencia.html', function(erro, dado) {

    var resistencia = parseFloat(req.body.tensao) / parseFloat(req.body.corrente);
    dado = dado.toString().replace(`{{ resistencia }}`, resistencia);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(dado);
    res.end();
  });
}); 