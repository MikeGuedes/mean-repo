//  Dependencias
var express     = require('express');
var router      = express.Router();

//  Model
var Categoria = require('../model/categoria');

//  Rotas
Categoria.methods(['get', 'put', 'post', 'delete']);
Categoria.register(router, '/categoria');

// router.get('/categoria', function(req, res){
//     res.send('Lista de categorias');
// });

//  Retorn router
module.exports = router;