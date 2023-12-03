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
                    emailBatalha: resultadoAutenticarB[0].emailBatalha,
                    telefoneBatalha: resultadoAutenticarB[0].telefoneBatalha,
                    senhaBatalha: resultadoAutenticarB[0].senhaBatalha,
                    imagemBatalha: resultadoAutenticarB[0].imagem,
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
    var emailBatalha = req.body.emailBatalhaServer;
    var telefoneBatalha = req.body.telefoneBatalhaServer;
    var senhaBatalha = req.body.senhaBatalhaServer;

    console.log(`PASSEI POR AQUI no controller variavel ${emailBatalha} e ${senhaBatalha}`)
    if (ReadableStreamDefaultController == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    }

    batalhaModel.cadastrarB(nomeBatalha, siglas, apresentador1, emailBatalha, telefoneBatalha, senhaBatalha).then(function(resposta){
        res.status(200).send("Empresa cadastrada com sucesso");
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarBatalha(req, res) {
    var pesquisaBatalha = req.body.pesquisaBatalhaServer;

    batalhaModel.buscarBatalha(pesquisaBatalha).then(function(resposta){
        res.status(200).send(resposta);
       
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
   }



   function listarB(req, res) {
    batalhaModel.listarB().then(function (resultado2) {
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


   function buscarTodosBatalha(req, res) {
    batalhaModel.buscarTodosBatalha().then(function (resultado) {
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
    autenticarB,
    cadastrarB,
    buscarBatalha,
    listarB,
    buscarTodosBatalha
}