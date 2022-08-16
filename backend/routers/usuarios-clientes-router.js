var express = require('express');
var router = express.Router();
var usuariosClientessss = require('../models/usuario-cliente')
//var mongoose = require('mongoose');

router.get('/',function(req, res) {
    usuariosClientessss.find()
    .then(result=>{res.send(result); res.end()})
    .catch(error=>{res.send(error); res.end()})
    ;
});

module.exports = router;