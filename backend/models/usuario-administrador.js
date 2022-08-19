var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    correo: String,
    contraseña: String, 
    fotoPerfil: String,
    nombre: String,
    apellido: String,
    numTelefono: String,
});
//module.exports = mongoose.model('NombreColeccion',esquemaCreado);
module.exports = mongoose.model('usuariosAdministradores',esquema);