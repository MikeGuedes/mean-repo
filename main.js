//  Dependencias
// var express     = require('express');
// var mongoose    = require('mongoose');
// var bodyParser  = require('body-parser'); 

// var jwt         = require('jsonwebtoken');
// var router      = express.Router();

//  Router config auth
// router.use(function(req, res, next){
//     var token = req.body.token || req.headers['token'];
//     if(!token){
//         res.send('Token omitido.');
//     }
// });

//  jwt
// var __secret = 'secret';
/* Descrição adicionada*/

// Comentario adicionado no branch fix

//  MongoDB
// var __dirname = 'mongodb://localhost/meanstackdb';
// mongoose.connect('mongodb://localhost/meanstackdb');
// var db = mongoose.connection;

//  Express config
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

//  Rotas
// app.use('/api', require('./route/auth'));
// app.use('/api', require('./route/api'));
// app.use('/api', require('./route/CategoriaController'));

// var categorie = require('./model/categorie');

// app.get('/', function(req, res){
//     res.send("Olá mundo !");
// });

// app.get('/api', function(req, res){
//     res.send("Olá mundo !");
// });

//  Start server
var app = require('./config/express')();
app.listen(app.get('port'));
console.log("Running on port "+ app.get('port') +"...");