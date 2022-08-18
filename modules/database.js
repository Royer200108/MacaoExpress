var mongoose = require('mongoose');

var servidor = 'localhost:27017';

class Database {
    constructor() {
        this.conectar();
    }

    conectar() {
        mongoose.connect(`mongodb://${servidor}/test`, { useNewUrlParser: true })
            .then(() => {
                console.log('Se conecto a la base de datos');
            }).catch(err => {
                console.log(JSON.stringify(err));
            }
            );
    }
}

//var mongoose = require('mongoose');
//var mongodb = require('mongodb');

//const MongoClient = mongodb.MongoClient;

//let db = 'MacaoExpress';
//const mongoDB = `mongodb://127.0.0.1/${db}`;

/*
let port = '27017';
let host = 'localhost';//poner 127.0.0.1 y sale una gran mostrosidad de errores
*/
//class Database{
//    constructor() {
//        this.conectar();
//    }

//    conectar(){
//        mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});//este tiene que ir a la par de port "/${db}
//        const db = mongoose.connection;
//        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//        /*
//        .then(result=>console.log(result))
//        .catch(error=>console.log(error));
//        */
//    }
//}

module.exports = new Database();