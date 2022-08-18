var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    usuario: String,
    nombre: String,
    apellidos: String,
    email: String,//Se necesita una validación de email
    //Agregar un nuevo valor llamado carritos, que estan sean las cosas que tienen en el carrito
    password: String,
    telefono: String,//Se necesita una validación de telefono que convierta entero a String
    direccion: String,
    fechaNacimiento: String,
});

module.exports = mongoose.model('usuarios', esquema);