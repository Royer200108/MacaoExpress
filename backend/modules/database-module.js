var mongoose = require('mongoose');
    //Nombre BD: MacaoExpress MacaoExpress
var bd = 'MacaoExpress ';
    //Puerto BD: 27017
let port = '27017';
    //nombre del hosting
let host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then(result=>{console.log('Se conecto a MongoDB-MacaoExpress db')})
        .catch(error=>{console.log(error)});
    }
}

module.exports = new Database();