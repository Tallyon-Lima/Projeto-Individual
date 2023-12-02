var express = require("express");
var router = express.Router();

var rackController = require("../controllers/rackController");

  router.get('/listarR', function (req, res){
    rackController.listarR(req, res);
  });

module.exports = router;