var database = require("../database/config")

function autenticarB(email, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);

    var instrucao = `
        SELECT * FROM batalhas WHERE emailBatalha = '${email}' AND senhaBatalha = '${senha}';
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarB(nomeBatalha, siglas, apresentador1, apresentador2, emailBatalha, telefoneBatalha, senhaBatalha) {
    var enviarB = `
        INSERT INTO batalhas (nomeBatalha, siglas, apresentador1, apresentador2, emailBatalha, telefoneBatalha, senhaBatalha) VALUES
         ('${nomeBatalha}' , '${siglas}' , '${apresentador1}' , '${apresentador2}', '${emailBatalha}' , '${telefoneBatalha}', '${senhaBatalha}');`;
    console.log("Executando a instrução SQL: \n" + enviarB);
    return database.executar(enviarB);
}

module.exports = {
    autenticarB,
    cadastrarB
};