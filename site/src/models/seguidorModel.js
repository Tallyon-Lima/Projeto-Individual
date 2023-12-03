const database = require("../database/config.js");


function seguir(idBatalha, batalhaSeguida) {
    var instrucao = `INSERT INTO seguidores(idSeguidor, fKBatalhaS, fkBatalhaSeguindo, seguindo) VALUES 
    (null, ${idBatalha}, ${batalhaSeguida}, 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deixarSeguir(idBatalha, batalhaSeguida) {
    var instrucao = ` delete from seguidores where fkBatalhaSeguindo = ${batalhaSeguida} and fkBatalhaS = ${idBatalha};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function seguidores(nomeBatalha) {
    var instrucao = ` select seguindo from seguidores JOIN batalhas ON idBatalha = fkBatalhaS
    WHERE nomeBatalha = '${nomeBatalha}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarSeguidor(idBatalha, batalhaSeguida) {
    var instrucao = `select seguindo from seguidores where fkBatalhaS = ${batalhaSeguida} and fkBatalhaSeguindo = ${idBatalha};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function totalUsuario() {
    var instrucao = `SELECT  sum(seguindo) AS totalSeguidores FROM seguidores;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    seguir,
     deixarSeguir,
     seguidores,
     verificarSeguidor,
     totalUsuario
    }
