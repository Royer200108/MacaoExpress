var mongoose = require('mongoose');

var esquemaTienda = new mongoose.Schema({
    logo: String,
    portada: String,
    nombre: String,
    slogan: String,
    Tipo: String,                   //cafe, comida rapida, comida tradiciona...
    numTelefono: String,
    productosOfrecidos: [
        {
            fotoProducto: String,
            nombreProducto: String,
            descripcionProducto: String,
            precioProducto: Number,
        }
    ]
});

//module.exports = mongoose.model('NombreColeccion',esquemaCreado);
module.exports = mongoose.model('tienda',esquemaTienda);