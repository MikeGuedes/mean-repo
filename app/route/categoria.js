// var controller = require('../controller/categoria')();

module.exports = function(app) {
    // app.get('/', app.controller.index);
    // app.get('/index', controller.index);
    app.get('/api', function(req, res){
        res.send("Funcionando !");
    });
};