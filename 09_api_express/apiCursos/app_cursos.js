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
  Curso.find(function (erro, todosOsCursos) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(todosOsCursos);
    }
  });
});


app.get('/cursos/:id', function (request, response) {
  //exemplo localhost:3200/cursos/123
  let id = request.params.id;

  Curso.findById(id, function (erro, getcurso) {
    if (erro) {
      response.json(erro);
    } else {
      response.json(getcurso);
    }
  });
});




app.post('/cursos', function (request, response) {
  //Inserir um curso
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

app.put('/cursos/:id', function (request, response) {
  let id = request.params.id;

  Curso.findById(id, function (erro, curso) {
    if (erro) {
      response.json(erro);

    } else {
      curso.codigo = request.body.codigo;
      curso.descricao = request.body.descricao;
      curso.cargaHoraria = request.body.cargaHoraria;

      curso.save(function (erro, curso_atual) {
        if (erro) {
          response.json(erro);
        } else {
          response.json(curso_atual);
        }
      })
    }
  })
});

app.delete('/cursos/:id', function (request, response) {
  let id = request.params.id;

  Curso.findById(id, function (erro, curso) {
    if (erro) {
      response.json(erro);
    } else {
      Curso.remove(curso, function (erro, Curso) {
        response.send('Curso removido')
      });
    }
  });

});


app.listen(3300, function () {
  console.log('Webservice em execução');
});