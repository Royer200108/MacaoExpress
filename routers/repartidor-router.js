var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var repartidor = require('../models/repartidor');

//crear un repartidor
router.post('/', function(req, res, next) {
    var repartidor = new repartidor({
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono,
    });

//guarda el repartidor en la base de datos
    repartidor.save().the(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error)
        res.end();
    });
} );

//obtener un repartidor por id (N.P.I)
router.get('/:id', function(req, res, next) {
    repartidor.findById(req.params.
        id, function(err, repartidor) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al obtener el repartidor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Repartidor obtenido',
                obj: repartidor
            });
        }
    );
});

//obtener todos los repartidores
router.get('/', function(req, res, next) {
    repartidor.find({},{_id:true, nombre:true})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
} );

//actualizar un repartidor (N.P.I)
router.put('/:id', function(req, res, next) {
    repartidor.findById(req.params.
        id, function(err, repartidor) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al obtener el repartidor',
                    error: err
                });
            }
            if (!repartidor) {
                return res.status(500).json({
                    title: 'Error al obtener el repartidor',
                    error: err
                });
            }
            repartidor.usuario = req.body.usuario;
            repartidor.nombre = req.body.nombre;
            repartidor.apellidos = req.body.apellidos;
            repartidor.email = req.body.email;
            repartidor.password = req.body.password;
            repartidor.telefono = req.body.telefono;
            repartidor.save(function(err, repartidor) {
                if (err) {
                    return res.status(500).json({
                        title: 'Error al actualizar el repartidor',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Repartidor actualizado',
                    obj: repartidor
                });
            } );
        }
    );
});

//eliminar un repartidor (N.P.I)
router.delete('/:id', function(req, res, next) {
    repartidor.findById(req.params.
        id, function(err, repartidor) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al obtener el repartidor',
                    error: err
                });
            }
            if (!repartidor) {
                return res.status(500).json({
                    title: 'Error al obtener el repartidor',
                    error: err
                });
            }
            repartidor.remove(function(err, repartidor) {
                if (err) {
                    return res.status(500).json({
                        title: 'Error al eliminar el repartidor',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Repartidor eliminado',
                    obj: repartidor
                });
            } );
        }
    );
} );

module.exports = router;