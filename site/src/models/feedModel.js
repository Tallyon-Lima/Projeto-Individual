const database = require("../database/config.js");

function salvar(batalha) {
  var instrucao = `INSERT INTO post (legenda, imgPost, fkUser) VALUES ('${batalha.legenda}', '${batalha.imagem}', ${Number(batalha.id)})`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listar() {

    var instrucao = ` SELECT * FROM post AS p
    JOIN batalhas AS b ON p.fkBatalhaP = b.idBatalha
    ORDER BY p.dtPost DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicarP(textoPost, imagemPost, idBatalha){
  console.log('f1');
  var instrucao = `INSERT INTO post (fkBatalhaP, conteudo, imagemPost, dtPost) VALUES ('${idBatalha}', '${textoPost}', '${imagemPost}', CURRENT_TIMESTAMP )`;

  return database.executar(instrucao);
}


module.exports = { 
    listar,
    salvar,
    publicarP
}