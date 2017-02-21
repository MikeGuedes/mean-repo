var express = require('express');
var load    = require('express-load');

//  Rotas
// var categoria = require('../app/route/categoria');

module.exports = function() {

    var app = express();
    //  Configuração de anbiente
    app.set('port', 3000);  //  Configuração da porta onde a api irá rodar
    app.set('view engine', 'ejs'); // view engine utilizada
    app.set('view', '../app/view'); // pasta onde ficarão as views da engine

    //  Middlewares
    app.use(express.static('./public')); // Acesso à conteudo de pastas pelo browser
    
    // categoria(app);

    // Carregamento dos arquivos do projeto no app
    load('model', { cwd: 'app' }) // cwd - Diretório base de carregamento dos arquivos
        .then('controller')
        .then('route')
        .into(app);

    return app;
};