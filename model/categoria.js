//  Dependencias
var restfull = require('node-restful');
var mongoose = restfull.mongoose;

//  Schema
var categoriaSchema = new mongoose.Schema({
    nome: String
});

//  Return Schema
module.exports = restfull.model('Categoria', categoriaSchema);
