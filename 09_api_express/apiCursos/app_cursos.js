let express = require('express');
var load = require('express-load');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.db = mongoose.connect('mongodb://localhost:27017/dbcursos');

load('models').into(app);

let Curso = app.models.cursos;

//Métodos expostos como serviço
app.get('/', function (request, response) {
  response.send('Servidor em funcionamento');
});

app.get('/cursos', function (request, response) {
  Curso.find(function (error, todosOsCursos) {
    if (error) {
      response.json(error);
    } else {
      response.json(todosOsCursos);
    }
  });
});

app.post('/cursos', function (request, response) {
  //Inserir um contato
  let codigo = request.body.codigo;
  let descricao = request.body.descricao;
  let cargaHoraria = request.body.cargaHoraria;

  let item = {
    'codigo': codigo,
    'descricao': descricao,
    'cargaHoraria': cargaHoraria
  };
  
  Curso.create(item, function (erro, curso) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(curso);
    }
  });

});


app.listen(3300, function () {
  console.log('Webservice em execução');
});