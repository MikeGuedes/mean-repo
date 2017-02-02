//  Dependencias
var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser'); 

//  MongoDB
var __dirname = 'mongodb://localhost/guiadb';
mongoose.connect(__dirname);

//  Express config
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  Rotas
app.use('/api', require('./route/api'));
app.use('/api', require('./route/categoria.controller'));

//  Start server
app.listen(3000);
console.log('Running on port 3000');