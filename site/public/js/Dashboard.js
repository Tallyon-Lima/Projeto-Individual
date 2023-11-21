var rima1 = document.getElementById('div_rima1');
var rima2 = document.getElementById('div_rima2');
var rima3 = document.getElementById('div_rima3');
var rima4 = document.getElementById('div_rima4');
var telaCarregando = document.getElementById('div_telaCarregando');
var telaInicial = document.getElementById('div_telaInicial');
var telaPerfil = document.getElementById('div_telaPerfil');
var telaFormAjuda = document.getElementById('div_tela_form_ajuda');
var header = document.getElementById('div_header');
var pesquisa = document.getElementById('div_pesquisa');
var telaPerfilBatalha = document.getElementById('div_telaPerfilBatalha');


var telaFeed = document.getElementById('div_feed2');





var nomeUsuario = document.getElementById('nomeUsuario')
nomeUsuario.innerHTML = sessionStorage.NOMEUSUARIO_USUARIO;
var nomeUsuario2 = document.getElementById('nomeUsuario2')
nomeUsuario2.innerHTML = sessionStorage.NOMEUSUARIO_USUARIO;
var emailUsuario = document.getElementById('emailUsuario');
emailUsuario.innerHTML = sessionStorage.EMAILUSUARIO_USUARIO;
var telefoneUsuario = document.getElementById('telefoneUsuario');
telefoneUsuario.innerHTML = sessionStorage.TELEFONEUSUARIO_USUARIO;
var senhaUsuario = document.getElementById('senhaUsuario');
senhaUsuario.innerHTML = sessionStorage.SENHAUSUARIO_USUARIO;










/*setTimeout(fRima02,1700)
*/

function fRima02(){
    rimasC.innerHTML = `2...`;
    setTimeout(fRima03,1000)
}

function fRima03(){
    rimasC.innerHTML = `1...`
    setTimeout(fRima04,1000)
}

function fRima04(){
    rimasC.innerHTML = `Rima!!!`;
    setTimeout(trocarTela,1800);
}

function trocarTela(){
    telaCarregando.style.opacity = "0";
    setTimeout(trocarTela2,500);
}

function trocarTela2(){
    telaCarregando.style.display = "none";
    telaInicial.style.display = "flex";
    setTimeout(trocarTela3,500);
}

function trocarTela3(){
    telaInicial.style.opacity = "1";
}

window.addEventListener("scroll", function() {
    var header = document.getElementById("div_header");
    if (window.scrollY > 50) {
      header.style.position = "fixed";
    } else {
      header.style.position = "absolute";
    }
  });
  


  function editarDado1(){
    var editar1 = document.getElementById('input_nomeUsuario');
    editar1.style.display = "flex";
  }

  
  function editarDado2(){
    var editar2 = document.getElementById('input_emailUsuario');
    editar2.style.display = "flex";
  }

  function editarDado3(){
    var editar3 = document.getElementById('input_telefoneUsuario');
    editar3.style.display = "flex";
  }

  function editarDado4(){
    var editar4 = document.getElementById('input_senhaUsuario');
    editar4.style.display = "flex";
  }


  function abrirPerfil(){
    telaPerfil.style.display = "flex";
    setTimeout(abrirPerfil2,500)
  }

  function abrirPerfil2(){
    telaPerfil.style.opacity = "1";
  }
  

  function fecharPerfil(){
    telaPerfil.style.opacity = "0";
    setTimeout(fecharPerfil2,500)
}

  function fecharPerfil2(){
    telaPerfil.style.display = "none";
  }




  function sairPerfil(){
    window.location = "../paginaInicialIns/paginaInicialIns.html"
  }


  function abrirAjuda(){
    telaFormAjuda.style.display= "block"
    setTimeout(abrirAjuda2,500);
  }

  function abrirAjuda2(){
    telaFormAjuda.style.opacity = "1";
  }

  function fecharAjuda(){
    telaFormAjuda.style.opacity= "0";
    setTimeout(fecharAjuda2, 500)
  }

  function fecharAjuda2(){
    telaFormAjuda.style.display= "none"
  }

  function abrirPesquisa(){
    pesquisa.style.display = "flex";
    header.style.display = "none";
  }

  
  var abriuPerfilBatalha = "false";

  function abrirHome(){
    if(abriuPerfilBatalha == "true"){
      telaFeed.style.display="none";   
      telaPerfilBatalha.style.display="flex";
      header.style.display = "none";
      pesquisa.style.display = "none";
    }else{
      header.style.display = "flex";
      pesquisa.style.display = "none";
      telaPerfilBatalha.style.display ="none";
      telaFeed.style.display= "flex";   
    }
  }
  
  function abrirPerfilBatalha(){
    abriuPerfilBatalha ="true";
    telaPerfilBatalha.style.display="flex";
    telaFeed.style.display="none";
  }