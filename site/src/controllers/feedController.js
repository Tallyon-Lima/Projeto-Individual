const batalhaModel = require('../models/feedModel.js');
/*
function salvar(req, res) {
    const imagemPostada = req.file.filename;

    const { textoPostado, id } = req.body

    const batalha = { textoPostado, imagemPostada, id }

 batalhaModel.salvar(batalha)
        .then(resultado => {
            res.status(201).send("Post criado com sucesso");
            console.log(resultado)
        }).catch(err => {
            res.status(500).send(err);
        });
}
*/
function listar(req, res) {
 batalhaModel.listar().then(function (resultado) {
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



module.exports = { listar }
