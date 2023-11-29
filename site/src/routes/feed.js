var express = require("express");
var router = express.Router();

const feedController = require('../controllers/feedController.js');



router.get('/listar', function (req, res){
  feedController.listar(req, res);
});

router.post('/publicarP', function (req, res) {
  feedController.publicarP(req, res);
})

router.post('/feedPerfil', function (req, res){
  feedController.feedPerfil(req, res);
});
module.exports = router;
