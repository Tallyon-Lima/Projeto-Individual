var database = require("../database/config")


function listarR() {
    var instrucao2 = `SELECT  sum(seguindo) AS seguidor , b.nomeBatalha  FROM seguidores AS s JOIN Batalhas AS b
    ON s.fkBatalhaS = b.idBatalha
    GROUP BY s.fkBatalhaS ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}


module.exports = {
    listarR,
};