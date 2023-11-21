var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticarU", function (req, res) {
    usuarioController.autenticarU(req, res);
    console.log('teste apareceu')
});


module.exports = router;