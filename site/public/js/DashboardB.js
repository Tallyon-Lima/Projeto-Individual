/* Pega os dados dos posts do bd*/
function pegarDadosPost() {
  fetch("/batalhas/listarBatalha")
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));
          sessionStorage.IDPOST_POST = json.idPost;
          sessionStorage.CONTEUDO_POST = json.conteudo;
          sessionStorage.IMAGEMPOST_POST = json.imagemPost;
          sessionStorage.DTPOST = json.dtPost;
          sessionStorage.FKBATALHAP = json.fkBatalhaP;
          sessionStorage.BATALHAS = JSON.stringify(json.batalha)
        });
      } else {
        return false;
      }

    }).catch(
      function (erro) {
        res.status(500).json(erro.sqlMessage);

      })

      setTimeout(pegarDadosBatalhas, 1000);
      setTimeout(pegarTodosOsDadosBatalhas,2000);
}



/* Cria um laco de repetição para publicar item por item*/
function carregarFeed() {
  fetch("/feed/listar")
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (resposta) {
          for (contador = 0; contador < resposta.length; contador++) {
            var post = resposta[contador];
            var feed = document.getElementById('div_feedHistory');

            if (post.imagemPost == '') {
              feed.innerHTML += `
                  <div class="post" id="post">
                  <div class="titulo" id="nomeBatalha">
                  ${post.nomeBatalha} </div>
                  <div class="texto" id="textoPostado">${post.conteudo}
                  </div>
                  </div>
                  `;
            } else {
              feed.innerHTML += `
                  <div class="post" id="post">
                  <div class="titulo" id="nomeBatalha">
                  ${post.nomeBatalha} </div>
                  <div class="texto" id="textoPostado">${post.conteudo}
                  </div>
                  <img
                      src="../paginaInicialIns/Imagens/${post.imagemPost}" id="imagemPostada">
              </div>
                  `;
            }
          }
        })
      }
    })


}







/*Pegar dados das batalhas */
function pegarDadosBatalhas() {
  fetch("/batalha/listarB")
    .then(function (resposta2) {
      if (resposta2.ok) {
        console.log(resposta2);
        resposta2.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));
          sessionStorage.IMAGEMBATALHAS_BATALHAS = json.imagem;
          setTimeout(carregarImagemBatalhas,100)
        });
      } else {
        return false;
      }

    }).catch(
      function (erro) {
        res.status(500).json(erro.sqlMessage);

      })
}





function carregarImagemBatalhas() {
  fetch("/batalha/listarB")
    .then(function (resposta2) {
      if (resposta2.ok) {
        resposta2.json().then(function (resposta2) {
          console.log("Dados recebidos das imagens", JSON.stringify(resposta2));

          for (contador = 0; contador < resposta2.length; contador++) {
            var batalhas = resposta2[contador];
            console.log(batalhas);
            var esquerdaPagina = document.getElementById('div_esquerdaPagina');

              esquerdaPagina.innerHTML += `
              <img src="../paginaInicialIns/Imagens/${batalhas.imagem}" id="divimg" onclick="abrirPerfilBatalha(${batalhas.imagem})">
                  `;
            
          }
        })
      }
    })
}




/*Pegar todos os dados das batalhas */
var listaNomeBatalhas =  [];
var listaSiglasBatalhas = [];
var listaApresentadorBatalhas = [];
var listaEmailBatalhas = [];
var listaTelefoneBatalhas = [];
var listaImagemBatalhas = [];



function pegarTodosOsDadosBatalhas() {
  fetch("/batalha/buscarTodosBatalha")
  .then(function (resultado) {
    console.log("ESTOU NO THEN DO entrar 5555()!");

    if (resultado.ok) {
        resultado.json()
        .then(json => {
          console.log(json);
          sessionStorage.NOMEBATALHA_BATALHAS = json.nomeBatalha;
          sessionStorage.SIGLAS_BATALHAS = json.siglas;
          sessionStorage.APRESENTADOR1_BATALHAS = json.apresentador1;
          sessionStorage.EMAILBATALHA_BATALHAS = json.emailBatalha;
          sessionStorage.TELEFONEBATALHA_BATALHAS = json.telefoneBatalha;
          sessionStorage.IMAGEM_BATALHAS = json.imagem;
        console.log(`resposta do banco ${json}`)
          for (contador = 0; contador < json.length; contador++) {
            var batalhas = json[contador];
            listaNomeBatalhas.push(batalhas.nomeBatalha);
            listaSiglasBatalhas.push(batalhas.siglas);   
            listaApresentadorBatalhas.push(batalhas.apresentador1);
            listaEmailBatalhas.push(batalhas.emailBatalha);
            listaTelefoneBatalhas.push(batalhas.telefoneBatalha);
            listaImagemBatalhas.push(batalhas.imagem);        
          }
    setTimeout(mostrarResultadoPesquisa, 100)
        })
    } else{
      return false;
    } 
  }).catch(
    function (erro){
      res.status(500).json(erro.sqlMessage)
    }
  )
 }













/*Enviar os pots pro banco*/
function publicarPost() {

  var textoPost = input_textoPost.value;
  var imagemPostEnviar = input_imagemPost.value.replace(`C:\\fakepath\\`, "");
  var fkBatalhaP = sessionStorage.IDBATALHA_BATALHAS;


  fetch("/feed/publicarP", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      textoPostServer: textoPost,
      imagemPostServer: imagemPostEnviar,
      idServer: fkBatalhaP,
    }),
  })
    .then((req) => {
      window.location = "../Dashboard/DashboardB.html"
    })
    .catch((err) => {
      console.log(err);
    })

}














/*Pego os valores das divs*/

var telaInicial = document.getElementById('div_telaInicial');
var telaPerfil = document.getElementById('div_telaPerfil');
var telaFormAjuda = document.getElementById('div_tela_form_ajuda');
var header = document.getElementById('div_header');
var pesquisa = document.getElementById('div_pesquisa');
var telaPerfilBatalha = document.getElementById('div_telaPerfilBatalha');
var telaFeed = document.getElementById('div_feed2');
var telaAddPost = document.getElementById('div_telaAddPost');
var mostrarResultadoBatalhas = document.getElementById('div_mostrarResultadoBatalhas');




var nomeBatalha = document.getElementById('nomeBatalha');
nomeBatalha.innerHTML = sessionStorage.NOMEBATALHA_BATALHAS;
var nomeBatalha2 = document.getElementById('nomeBatalha2');
nomeBatalha2.innerHTML = sessionStorage.NOMEBATALHA_BATALHAS;
var siglasBatalha = document.getElementById('siglasBatalha');
siglasBatalha.innerHTML = sessionStorage.SIGLAS_BATALHAS;
var apresentador1 = document.getElementById('apresentador1');
apresentador1.innerHTML = sessionStorage.APRESENTADOR1_BATALHAS;
var emailBatalha = document.getElementById('emailBatalha');
emailBatalha.innerHTML = sessionStorage.EMAILBATALHA_BATALHAS;
var telefoneBatalha = document.getElementById('telefoneBatalha');
telefoneBatalha.innerHTML = sessionStorage.TELEFONEBATALHA_BATALHAS;
var senhaBatalha = document.getElementById('senhaBatalha');
senhaBatalha.innerHTML = sessionStorage.SENHABATALHA_BATALHAS;







window.addEventListener("scroll", function () {
  var header = document.getElementById("div_header");
  if (window.scrollY > 50) {
    header.style.position = "fixed";
  } else {
    header.style.position = "absolute";
  }
});



function editarDado1() {
  var editar1 = document.getElementById('input_nomeBatalha');
  editar1.style.display = "flex";
}


function editarDado2() {
  var editar2 = document.getElementById('input_siglasBatalha');
  editar2.style.display = "flex";
}

function editarDado3() {
  var editar3 = document.getElementById('input_apresentador1Batalha');
  editar3.style.display = "flex";
}

function editarDado4() {
  var editar4 = document.getElementById('input_emailBatalha');
  editar4.style.display = "flex";
}

function editarDado5() {
  var editar3 = document.getElementById('input_telefoneBatalha');
  editar3.style.display = "flex";
}

function editarDado6() {
  var editar4 = document.getElementById('input_senhaBatalha');
  editar4.style.display = "flex";
}


function abrirPerfil() {
  telaPerfil.style.display = "flex";
  setTimeout(abrirPerfil2, 500)
}

function abrirPerfil2() {
  telaPerfil.style.opacity = "1";
}


function fecharPerfil() {
  telaPerfil.style.opacity = "0";
  setTimeout(fecharPerfil2, 500)
}

function fecharPerfil2() {
  telaPerfil.style.display = "none";
}




function sairPerfil() {
  window.location = "../paginaInicialIns/paginaInicialIns.html"
}


function abrirAjuda() {
  telaFormAjuda.style.display = "block"
  setTimeout(abrirAjuda2, 500);
}

function abrirAjuda2() {
  telaFormAjuda.style.opacity = "1";
}

function fecharAjuda() {
  telaFormAjuda.style.opacity = "0";
  setTimeout(fecharAjuda2, 500)
}

function fecharAjuda2() {
  telaFormAjuda.style.display = "none"
}

function abrirPesquisa() {
  pesquisa.style.display = "flex";
  header.style.display = "none";
  telaAddPost.style.display = "none";
  telaFeed.style.display = "none";
  mostrarResultadoBatalhas.style.display = "flex";
}




function abrirHome() {
  telaFeed.style.display = "flex";
  telaPerfilBatalha.style.display = "none";
  telaAddPost.style.display = "none";
  header.style.display = "flex";
  pesquisa.style.display = "none";
  mostrarResultadoBatalhas.style.display = "none";
}

function abrirPerfilBatalha(peixe) {
  abriuPerfilBatalha = "true";
  telaPerfilBatalha.style.display = "flex";
  telaFeed.style.display = "none";
  mostrarResultadoBatalhas.style.display = "none";

  var peixe2 = peixe;
}


function btnAdicionarPost() {
  pesquisa.style.display = "none";
  header.style.display = "none";
  telaAddPost.style.display = "flex";
  mostrarResultadoBatalhas.style.display = "none";
}






/*Pesquisa batalha*/
var listaNomeBatalha = [  ];

function pesquisarBatalhaFuncao() {
  var pesquisaBatalha = input_pesquisaBatalha.value.toLowerCase();
  fetch("/batalha/buscarBatalha", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pesquisaBatalhaServer: pesquisaBatalha,
    })
  }) .then(function (resposta) {
    console.log("ESTOU NO THEN DO entrar 2222()!");

    if (resposta.ok) {
        resposta.json()
        .then(json => {
          console.log(json);
          sessionStorage.NOMEBATALHA_BATALHAS = json.nomeBatalha;
          console.log(resposta+"aqui" + nomeBatalha)
          for (contador = 0; contador < json.length; contador++) {
            var batalhasP = json[contador];
            listaNomeBatalha.push(batalhasP.nomeBatalha)           
          }
    setTimeout(mostrarResultadoPesquisa, 100)
        })
    } else{
      return false;
    } 
  }).catch(
    function (erro){
      res.status(500).json(erro.sqlMessage)
    }
  )
 }


function mostrarResultadoPesquisa(){
  var mostrarResultadoBatalhas = document.getElementById('div_mostrarResultadoBatalhas');
  mostrarResultadoBatalhas.innerHTML = ""
  mostrarResultadoBatalhas.innerHTML += `<div class="headerPesquisa" id="div_pesquisa"> 
  <img src="../paginaInicialIns/Imagens/lupa.png" >
  <input id="input_pesquisaBatalha"  placeholder="Pesquise aqui">
  <button onclick="pesquisarBatalhaFuncao()">Pesquisar</button>`;
  
  for(var contador = 0; contador < listaNomeBatalha.length; contador++){
    mostrarResultadoBatalhas.innerHTML += `
      <div class="resultadoBatalha">
    ${listaNomeBatalha[contador]}
</div>
  `;

  }
}












 /*Gráfico*/
