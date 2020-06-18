let express = require('express');
var load = require('express-load');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.db = mongoose.connect('mongodb://localhost:27017/dbcontatos');

load('models').into(app);

let Contato = app.models.contatos;

//Métodos expostos como serviço
app.get('/', function (request, response) {
  response.send('Servidor em funcionamento');
});


app.get('/contatos', function (request, response) {
  //Caso ocorra algum erro, o parametro na função callBack a baixo o recebera, caso contrario o parametro erro será nula.
  Contato.find(function (erro, todosContatos) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(todosContatos);
    }
  });
});


app.post('/contatos', function (request, response) {
  //Inserir um contato
  let nome = request.body.nome;
  let idade = request.body.idade;
  let telefone = request.body.telefone;

  let item = {
    'nome': nome,
    'idade': idade,
    'telefone': telefone
  };
  
  Contato.create(item, function (erro, contato) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(contato);
    }
  });

});

app.listen(3200, function () {
  console.log('Webservice em execução');
});