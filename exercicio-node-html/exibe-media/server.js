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
    fs.readFile('exibe-media.html', function(erro, dado) {
        var soma = parseInt(req.body.valor1) + parseInt(req.body.valor2) + parseInt(req.body.valor3) + parseInt(req.body.valor4);
        var media = soma / 4;
        dado = dado.toString().replace(`{{ media }}`, media);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(dado);
        res.end();
    });
}); 