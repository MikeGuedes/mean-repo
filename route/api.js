//  Dependencias
var express     = require('express');
var router      = express.Router();


//  Rotas
router.get('/categorias', function(req, res){
    res.send('categorias');
});

//  Retorn router
module.exports = router;