var database = require("../database/config")


function listarR() {
    var instrucao2 = `SELECT SUM(seguindo) AS seguidor, b.nomeBatalha FROM seguidores AS s
    JOIN Batalhas AS b ON s.fkBatalhaS = b.idBatalha
    GROUP BY s.fkBatalhaS
    ORDER BY seguidor DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}

function listarRB(fkBatalhaRB) {
    var instrucao = `SELECT rb.nomeMc, rb.qtdPonto FROM rackBatalha AS rb JOIN Batalhas AS b ON rb.fkBatalhaRB = b.idBatalha
    WHERE rb.fkBatalhaRB = "${fkBatalhaRB}" ORDER BY idRackBatalha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarRank(batalhaSeguida) {
    var instrucao = `SELECT idRackBatalha, nomeBatalha, nomeMc, qtdPonto FROM rackBatalha JOIN batalhas ON idBatalha = fkBatalhaRB
    WHERE fkBatalhaRB = '${batalhaSeguida}'; `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function apagarRank(batalhaSeguida) {
    var instrucao = `DELETE FROM rackBatalha
    WHERE fkBatalhaRB = '${batalhaSeguida}'; `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarRank(nomeMc1, nomeMc2, nomeMc3, nomeMc4, nomeMc5, pontos1, pontos2, pontos3, pontos4, pontos5, batalhaSeguida) {
    var instrucao = `
    INSERT INTO rackBatalha (nomeMc,qtdPonto,fkBatalhaRB) VALUES
    ('${nomeMc1}', ${pontos1}, ${batalhaSeguida}),
    ('${nomeMc2}', ${pontos2}, ${batalhaSeguida}),
    ('${nomeMc3}', ${pontos3}, ${batalhaSeguida}),
    ('${nomeMc4}', ${pontos4}, ${batalhaSeguida}),
    ('${nomeMc5}', ${pontos5}, ${batalhaSeguida});`;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarR,
    listarRB,
    verificarRank,
    apagarRank,
    cadastrarRank
};