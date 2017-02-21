module.exports = function() {
    
    var controller = {};

    controller.index = function(req, res){
        // res.render('index');
        //  return res.render('index', { nome: 'Express' });
        res.send('Funcionando.');
    };

    return controller;
};  