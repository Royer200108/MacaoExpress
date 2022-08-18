var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

//crear un usuario
router.post('/usuarios', function(req, res) {
    let usuario = new usuario({
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        fechaNacimiento: req.body.fechaNacimiento,
    });

    usuario.save().the(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error)
        res.end();
    });
});

//obtener un usuario por id 
router.get('/:id', function(req, res) {
    usuario.findById(req.params.id, function(err, usuario) {
        if (err) {
            return res.status(500).json({
                title: 'Error al obtener el usuario',
                error: err
            });
        }
        res.status(200).json({
            message: 'Usuario obtenido',
            obj: usuario
        });
    });
} );

//obtener todos los usuarios 
router.get('/', function(req, res) {
    usuario.find({},{_id:true, nombre:true})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//actualizar un usuario 
router.put('/:id', function(req, res) {
    usuario.findById(req.params.id, function(err, usuario) {
        if (err) {
            return res.status(500).json({
                title: 'Error al obtener el usuario',
                error: err
            });
        }
        if (!usuario) {
            return res.status(500).json({
                title: 'Error al obtener el usuario',
                error: err
            });
        }
        usuario.usuario = req.body.usuario;
        usuario.nombre = req.body.nombre;
        usuario.apellidos = req.body.apellidos;
        usuario.email = req.body.email;
        usuario.password = req.body.password;
        usuario.telefono = req.body.telefono;
        usuario.direccion = req.body.direccion;
        usuario.fechaNacimiento = req.body.fechaNacimiento; 
        usuario.save(function(err, usuario) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al actualizar el usuario',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Usuario actualizado',
                obj: usuario
            });
        } );
    } );
} );

//eliminar un usuario por id 
router.delete('/:id', function(req, res) {
    usuario.findById(req.params.id, function(err, usuario) {
        if (err) {
            return res.status(500).json({
                title: 'Error al obtener el usuario',
                error: err
            });
        }
        if (!usuario) {
            return res.status(500).json({
                title: 'Error al obtener el usuario',
                error: err
            });
        }
        usuario.remove(function(err, usuario) {
            if (err) {
                return res.status(500).json({
                    title: 'Error al eliminar el usuario',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Usuario eliminado',
                obj: usuario
            });
        } );
    } );
} );

module.exports = router;