var database = require("../database/config")

function autenticarU(email, senha) {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);

    var instrucao = `
        SELECT * FROM usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrar(nome, email, telefone, senha) {
    var instrucao = `
        INSERT INTO usuario (nomeUsuario, emailUsuario, telefoneUsuario, senhaUsuario) VALUES
         ('${nome}' , '${email}' , '${telefone}', '${senha}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticarU,
    cadastrar
};