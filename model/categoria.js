//  Dependencias
var restfull = require('node-restful');
var mongoose = restfull.mongoose;
// var mongoose = require('mongoose');

//  Schema
var categoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

//  Return Schema
module.exports = restfull.model('Categoria', categoriaSchema);
// var Categorie = module.exports = mongoose.model('Categorie', CategorieSchema);
