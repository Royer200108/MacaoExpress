var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var administrador = require('../models/administrador');

//crear un administrador
router.post('/administrador', function(req, res) {
    var administrador = new administrador({
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono,
    });

    //guarda el administrador en la base de datos
    administrador.save().the(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error)
        res.end();
    });
} );

//obtener un administrador por id (N.P.I)
router.get('/:id', function(req, res) {
    administrador.findById(req.params.
        id, function(err, administrador) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al obtener el administrador',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Administrador obtenido',
                obj: administrador
            });
        }
    );
} );

//obtener todos los administradores (N.P.I)
router.get('/', function(req, res) {
    administrador.find({},{_id:true, nombre:true})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
} );

//actualizar un administrador (N.P.I)
router.patch('/:id', function(req, res) {
    administrador.findById(req.params.
        id, function(err, administrador) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al obtener el administrador',
                    error: err
                });
            }
            if (!administrador) {
                return res.status(500).json({
                    title: 'Error al obtener el administrador',
                    error: {message: 'No existe el administrador'}
                });
            }
            administrador.nombre = req.body.nombre;
            administrador.apellidos = req.body.apellidos;
            administrador.email = req.body.email;
            administrador.password = req.body.password;
            administrador.telefono = req.body.telefono;
            administrador.save(function(err, administrador) {
                if (err) {
                    return res.status(500).json({
                        title: 'Error al actualizar el administrador',
                        error: err
                    });
                }
                res.status(201).json({
                    message: 'Administrador actualizado',
                    obj: administrador
                });
            } );
        }
    );
} );

//eliminar un administrador (N.P.I)
router.delete('/:id', function(req, res) {
    administrador.findById(req.params.
        id, function(err, administrador) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al obtener el administrador',
                    error: err
                });
            }
            if (!administrador) {
                return res.status(500).json({
                    title: 'Error al obtener el administrador',
                    error: {message: 'No existe el administrador'}
                });
            }
            administrador.remove(function(err, administrador) {
                if (err) {
                    return res.status(500).json({
                        title: 'Error al eliminar el administrador',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Administrador eliminado',
                    obj: administrador
                });
            } );
        }
    );
} );

module.exports = router;