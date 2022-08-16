var express = require('express');
var router = express.Router();
var tiendas = require('../models/tienda')
var mongoose = require('mongoose');

router.get('/',function(req, res) {
    
    tiendas.find()
    .then(result=>{res.send(result); res.end()})
    .catch(error=>{res.send(error); res.end()})
    ;
});

module.exports = router;