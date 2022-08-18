var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var empresa = require('../models/empresa');

//crear una empresa
router.post('/', function(req, res, next) {
    var empresa = new empresa({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        web: req.body.web,
        logo: req.body.logo,
        descripcion: req.body.descripcion,
    });

//guarda la empresa en la base de datos
    empresa.save().the(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error)
        res.end();
    });
});

//obtener una empresa por id (N.P.I)  
router.get('/:id', function(req, res, next) {
    empresa.find({},{_id:true, nombre:true})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
} );

//obtener todas las empresas 
router.get('/', function(req, res, next) {
    empresa.find(function(err, empresas) {
        if (err) {
            return res.status(500).json({
                title: 'Error al obtener las empresas',
                error: err
            });
        }
        res.status(200).json({
            message: 'Empresas obtenidas',
            obj: empresas
        });
    });
});

//actualizar una empresa por id
router.patch('/:id', function(req, res) {
    empresa.findById(req.params.id, function(err, empresa) {
        if (err) {
            return res.status(500).json({
                title: 'Error al obtener la empresa',
                error: err
            });
        }
        if (!empresa) {
            return res.status(500).json({
                title: 'Error al obtener la empresa',
                error: {message: 'No existe la empresa'}
            });
        }
        empresa.nombre = req.body.nombre;
        empresa.telefono = req.body.telefono;
        empresa.web = req.body.web;
        empresa.logo = req.body.logo;
        empresa.descripcion = req.body.descripcion;
        empresa.save(function(err, empresa) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al actualizar la empresa',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Empresa actualizada',
                obj: empresa
            });
        });
    } );
} );

//eliminar una empresa por id
router.delete('/:id', function(req, res, next) {
    empresa.findById(req.params.id, function(err, empresa) {
        if (err) {
            return res.status(500).json({
                title: 'Error al obtener la empresa',
                error: err
            });
        }
        if (!empresa) {
            return res.status(500).json({
                title: 'Error al obtener la empresa',
                error: {message: 'No existe la empresa'}
            });
        }
        empresa.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al eliminar la empresa',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Empresa eliminada',
                obj: result
            });
        } );
    } );
} );

module.exports = router;