var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    telefono: String,//Se necesita una validación de telefono que convierta entero a String
    web: String,
    logo: String,//Imagen
    descripcion: String,
});

module.exports = mongoose.model('empresas', esquema);