var express = require("express");
var router = express.Router();

var batalhaController = require("../controllers/batalhaController");

router.post("/cadastrarB", function (req, res) {
    batalhaController.cadastrarB(req, res);
console.log(`Passei por aqui no router batalha`)
});

router.post("/autenticarB", function (req, res) {
    batalhaController.autenticarB(req, res);
});

router.post('/buscarBatalha', function (req, res){
    batalhaController.buscarBatalha(req, res);
   
  });

  router.get('/listarB', function (req, res){
    batalhaController.listarB(req, res);
  });

module.exports = router;