var seguidorModel = require('../models/seguidorModel.js');


function seguir(req, res) {
    var idBatalha = req.body.idBatalhaServer;
    var batalhaSeguida = req.body.batalhaSeguidaServer;

    seguidorModel.seguir(idBatalha, batalhaSeguida).then(function (resultado) {
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


function deixarSeguir(req, res) {
    var idBatalha = req.body.idBatalhaServer;
    var batalhaSeguida = req.body.batalhaSeguidaServer;

    seguidorModel.deixarSeguir(idBatalha, batalhaSeguida).then(function (resultado) {
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

function seguidores(req, res) {
    var nomeBatalha = req.body.nomeBatalhaServer;

    seguidorModel.seguidores(nomeBatalha).then(function (resultado) {
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

function verificarSeguidor(req, res) {
    var idBatalha = req.body.idBatalhaServer;
    var batalhaSeguida = req.body.batalhaSeguidaServer;

    seguidorModel.verificarSeguidor(idBatalha, batalhaSeguida).then(function (resultado) {
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


module.exports = { 
    seguir, 
    deixarSeguir,
    seguidores,
    verificarSeguidor,
}