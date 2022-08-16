var express = require('express');
var dataBase = require('./modules/database-module');
var bodyParser = require('body-parser');
var cors = require('cors');
var ClientesRouter = require('./routers/usuarios-clientes-router');
var tiendasRouter = require('./routers/tiendas-router');

var app = express();

//Para pasar informacion al req.body (Poblarlo)
app.use(cors());                                    //Permite peticiones de otros origenes
app.use(bodyParser.json());                         //middleware app.use()
app.use(bodyParser.urlencoded({extended: true}));
app.use('/usuariosClientes', ClientesRouter);
app.use('/tiendas', tiendasRouter);

app.get('/', function(req, res) {
    res.send("Peticion recibida, Macao en linea");
});

app.listen(8888, function() {
    console.log("Servidor levantado correctamente")
});