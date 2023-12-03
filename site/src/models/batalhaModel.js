var database = require("../database/config")

function autenticarB(email, senha) {
    console.log("ACESSEI A BATALHA MODEL \n \n\t\t function entrar(): ", email, senha);

    var instrucao = `
        SELECT * FROM batalhas WHERE emailBatalha = '${email}' AND senhaBatalha = '${senha}';
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarB(nomeBatalha, siglas, apresentador1, emailBatalha, telefoneBatalha, senhaBatalha) {
    var enviarB = `
        INSERT INTO batalhas (nomeBatalha, siglas, apresentador1,emailBatalha, telefoneBatalha, senhaBatalha) VALUES
         ('${nomeBatalha}' , '${siglas}' , '${apresentador1}' , '${emailBatalha}' , '${telefoneBatalha}', '${senhaBatalha}');`;
    console.log("Executando a instrução SQL: \n" + enviarB);
    return database.executar(enviarB);
}


function buscarBatalha(pesquisaBatalha) {
    var instrucao = `SELECT nomeBatalha FROM batalhas WHERE 
    nomeBatalha like '%${pesquisaBatalha}%'; `;
    console.log("Executando a instrução SQL:  \n" + instrucao);
    return database.executar(instrucao);
}

function listarB() {
    var instrucao2 = ` SELECT imagem FROM batalhas;`;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}

function buscarTodosBatalha() {
    var instrucao = ` SELECT * FROM batalhas;`;
    console.log("Executando a instrução SQL:  \n" + instrucao);
    return database.executar(`${instrucao}`);
}


module.exports = {
    autenticarB,
    cadastrarB,
    buscarBatalha,
    listarB,
    buscarTodosBatalha
};