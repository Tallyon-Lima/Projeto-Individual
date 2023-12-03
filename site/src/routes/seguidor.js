var seguidorController = require('../controllers/seguidorController.js');
var express = require("express");
var router = express.Router();

router.post('/seguidores', function (req, res){
    seguidorController.seguidores(req, res);
});

router.post("/seguir", function (req, res){
    seguidorController.seguir(req, res);
});

router.post("/deixarSeguir", function (req, res){
    seguidorController.deixarSeguir(req, res);
});

router.post('/verificarSeguidor', function (req, res){
    seguidorController.verificarSeguidor(req, res);
});

router.get('/totalUsuario', function (req, res){
    seguidorController.totalUsuario(req, res);
  });
  
module.exports = router;
