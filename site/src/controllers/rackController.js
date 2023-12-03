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

   function verificarRank(req, res) {
    var batalhaSeguida = req.body.batalhaSeguidaServer;
 
        rackModel.verificarRank(batalhaSeguida).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function apagarRank(req, res) {
    var batalhaSeguida = req.body.batalhaSeguidaServer;
 
        rackModel.apagarRank(batalhaSeguida).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarRank(req, res) {
    var nomeMc1 = req.body.nomeMc1Server;
    var nomeMc2 = req.body.nomeMc2Server;
    var nomeMc3 = req.body.nomeMc3Server;
    var nomeMc4 = req.body.nomeMc4Server;
    var nomeMc5 = req.body.nomeMc5Server;

    var pontos1 = req.body.pontos1Server;
    var pontos2 = req.body.pontos2Server;
    var pontos3 = req.body.pontos3Server;
    var pontos4 = req.body.pontos4Server;
    var pontos5 = req.body.pontos5Server;    
    var batalhaSeguida = req.body.batalhaSeguidaServer;


    rackModel.cadastrarRank(nomeMc1, nomeMc2, nomeMc3, nomeMc4, nomeMc5, pontos1, pontos2, pontos3, pontos4, pontos5, batalhaSeguida).then(function(resposta) {
        res.status(200).send("Usuario cadastrado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    listarR,
    listarRB,
    verificarRank,
    apagarRank,
    cadastrarRank
}