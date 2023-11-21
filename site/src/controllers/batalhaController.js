var batalhaModel = require("../models/batalhaModel");



function autenticarB(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu emai está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        batalhaModel.autenticarB(email, senha)    
        .then(
            function (resultadoAutenticarB){
                if (resultadoAutenticarB.length == 1) {
                    console.log(resultadoAutenticarB);
                res.json({
                    idBatalha: resultadoAutenticarB[0].idBatalha,
                    nomeBatalha: resultadoAutenticarB[0].nomeBatalha,
                    siglas: resultadoAutenticarB[0].siglas,
                    apresentador1: resultadoAutenticarB[0].apresentador1,
                    apresentador2: resultadoAutenticarB[0].apresentador2,
                    emailBatalha: resultadoAutenticarB[0].emailBatalha,
                    telefoneBatalha: resultadoAutenticarB[0].telefoneBatalha,
                    senhaBatalha: resultadoAutenticarB[0].senhaBatalha,
                                });    
                } else if(resultadoAutenticarB.length == 0){
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um batalha com o mesmo login e senha!");
            }
        }
        ).catch(
            function (erro){
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
        }
    }





function cadastrarB(req, res) {
    var nomeBatalha = req.body.nomeServer;
    var siglas = req.body.siglasServer;
    var apresentador1 = req.body.apresentador1Server;
    var apresentador2 = req.body.apresentador2Server;
    var emailBatalha = req.body.emailBatalhaServer;
    var telefoneBatalha = req.body.telefoneBatalhaServer;
    var senhaBatalha = req.body.senhaBatalhaServer;

    console.log(`PASSEI POR AQUI no controller variavel ${emailBatalha} e ${senhaBatalha}`)
    if (ReadableStreamDefaultController == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    }

    batalhaModel.cadastrarB(nomeBatalha, siglas, apresentador1, apresentador2, emailBatalha, telefoneBatalha, senhaBatalha).then(function(resposta){
        res.status(200).send("Empresa cadastrada com sucesso");
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    autenticarB,
    cadastrarB
}