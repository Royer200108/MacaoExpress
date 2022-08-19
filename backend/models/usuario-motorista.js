var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    correo: String,
    contraseña: String, 
    fotoPerfil: String,
    nombre: String,
    apellido: String,
    numTelefono: String,
    calificacion: Number,
    notificaciones : mongoose.SchemaTypes.Mixed,
    pedidosPendientes: mongoose.SchemaTypes.Mixed,
    pedidosEntregados: mongoose.SchemaTypes.Mixed
});
//module.exports = mongoose.model('NombreColeccion',esquemaCreado);
module.exports = mongoose.model('usuariosMotoristas',esquema);