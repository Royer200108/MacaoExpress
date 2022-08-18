var express = require('express');
var database = require('./modules/database');
var app = express();
var bodyParser = require('body-parser');

var usuariosRouter = require('./routers/usuarios-router');
var administradorRouter = require('./routers/administrador-router');
var empresasRouter = require('./routers/empresas-router');
var repartidorRouter = require('./routers/repartidor-router');

var port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/usuarios', usuariosRouter);
app.use('/administradores', administradorRouter);
app.use('/empresas', empresasRouter);
app.use('/repartidores', repartidorRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//mongodb connection
database.conectar();//Sugerencia

app.listen(port, () => {
    console.log(`Servidor levantado en el http://localhost:${port}`);
});

/*
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;

//Levantamos el servidor web 
const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);

    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    console.log(`File path: ${filePath}`);
    console.log(`Content-Type: ${contentType}`)

    res.writeHead(200, {'Content-Type': contentType});

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

server.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`Server listening at port ${port}...`);
    }
});
*/