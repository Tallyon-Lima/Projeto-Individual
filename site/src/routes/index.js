var express = require("express");
var router = express.Router();


router.get("/paginaInicialIns/paginaInicialIns.html", function (req, res) {
 res.render(req, res);
});




module.exports = router;