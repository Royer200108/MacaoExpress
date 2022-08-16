var mongoose = require('mongoose');

var esquemaClientes = new mongoose.Schema({
    correo: String,
    contraseña: String, 
    fotoPerfil: String,
    nombre: String,
    apellido: String,
    numTelefono: String,
    direccion: String,
    notificaciones : mongoose.SchemaTypes.Mixed,
    pedidosPendientes: mongoose.SchemaTypes.Mixed,
    pedidosRecibidos: mongoose.SchemaTypes.Mixed
});

//module.exports = mongoose.model('NombreColeccion',esquemaCreado);
module.exports = mongoose.model('usuariosClientes', esquemaClientes);

//usuariosclientes
//usuariosClientes
