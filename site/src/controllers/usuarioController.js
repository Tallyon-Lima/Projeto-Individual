var usuarioModel = require("../models/usuarioModel");


function autenticarU(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu emai está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.autenticarU(email, senha)

        
        .then(
            function (resultadoAutenticarU){
                if (resultadoAutenticarU.length == 1) {
                    console.log(resultadoAutenticarU);
                res.json({
                    idUsuario: resultadoAutenticarU[0].idUsuario,
                    nomeUsuario: resultadoAutenticarU[0].nomeUsuario,
                    emailUsuario: resultadoAutenticarU[0].emailUsuario,
                    telefoneUsuario: resultadoAutenticarU[0].telefoneUsuario,
                    senhaUsuario: resultadoAutenticarU[0].senhaUsuario,
                                });    
                } else if(resultadoAutenticarU.length == 0){
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuario com o mesmo login e senha!");
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


    
function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    usuarioModel.cadastrar(nome, email, telefone, senha).then(function(resposta) {
        res.status(200).send("Usuario cadastrado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    autenticarU,
    cadastrar
}