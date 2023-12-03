var express = require("express");
var router = express.Router();

var rackController = require("../controllers/rackController");

  router.get('/listarR', function (req, res){
    rackController.listarR(req, res);
  });

  
  router.post('/listarRB', function (req, res){
    rackController.listarRB(req, res);
  });

  router.post('/verificarRank', function (req, res){
    rackController.verificarRank(req, res);
});

router.post('/apagarRank', function (req, res){
  rackController.apagarRank(req, res);
});

router.post("/cadastrarRank", function (req, res) {
  rackController.cadastrarRank(req, res);
});

module.exports = router;