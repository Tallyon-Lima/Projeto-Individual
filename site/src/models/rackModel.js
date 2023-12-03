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

module.exports = {
    listarR,
    listarRB
};