const database = require("../database/config.js");
/*
function salvar(batalha) {
  var instrucao = `INSERT INTO post (legenda, imgPost, fkUser) VALUES ('${batalha.legenda}', '${batalha.imagem}', ${Number(batalha.id)})`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}*/

function listar() {

    var instrucao = ` SELECT * FROM post AS p
    JOIN batalhas AS b ON p.fkBatalhaP = b.idBatalha
    ORDER BY p.idPost DESC;;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = { 
    listar}