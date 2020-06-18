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

app.listen(3200, function () {
  console.log('Webservice em execução');
});