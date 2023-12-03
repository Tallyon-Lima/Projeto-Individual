var rackModel = require("../models/rackModel");

   function listarR(req, res) {
    rackModel.listarR().then(function (resultado2) {
           if (resultado2.length > 0) {
               res.status(200).json(resultado2);
           } else {
               res.status(204).send("Nenhum resultado encontrado!")
           }
       }).catch(function (erro) {
           console.log(erro);
           console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
           res.status(500).json(erro.sqlMessage);
       });
   }


   function listarRB(req, res) {
    var fkBatalhaRB = req.body.fkBatalhaRBServer;
    rackModel.listarRB(fkBatalhaRB).then(function (resposta) {
           if (resposta.length > 0) {
               res.status(200).json(resposta);
           } else {
               res.status(204).send("Nenhum resultado encontrado!")
           }
       }).catch(function (erro) {
           console.log(erro);
           console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
           res.status(500).json(erro.sqlMessage);
       });
   }


module.exports = {
    listarR,
    listarRB
}