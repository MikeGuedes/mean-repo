//  Dependencias
var express     = require('express');
var router      = express.Router();

//  Model
var Categoria = require('../model/categoria');

//  Rotas
Categoria.methods(['get', 'put', 'post', 'delete']);
Categoria.register(router, '/categoria');

//  Router config auth
router.use(function(req, res, next){
    res.send('OK.');
    // var token = req.body.token || req.headers['token'];
    // if(!token){
    //     res.send('Token omitido.');
    // }
});

// router.get('/categoria', function(req, res){
//     res.send('Lista de categorias');
// });

//  Retorn router
module.exports = router;