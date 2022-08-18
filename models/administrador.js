var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    usuario: String,
    nombre: String,
    apellidos: String,
    email: String,//Se necesita una validación de email
    password: String,
    telefono: String,//Se necesita una validación de telefono que convierta entero a String
});

module.exports = mongoose.model('administradores', esquema);