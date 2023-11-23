var express = require("express");
var router = express.Router();

const feedController = require('../controllers/feedController.js');



router.get('/listar', function (req, res){
  feedController.listar(req, res);
});

router.post('/publicarP', function (req, res) {
  feedController.publicarP(req, res);
})

  /*
router.post('/listarLike', (req, res) => {
  feedController.listarLikes(req, res);
});

router.post('/tirarlike', (req, res) =>{
  feedController.dandoLike(req, res);
})

router.post('/darlike', (req, res) =>{
  feedController.dando1Like(req, res);
})

router.get('/listarQtdLike', (req, res) =>{
  feedController.listandoQtdLikes(req, res);
})

*/

module.exports = router;
