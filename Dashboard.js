var rima1 = document.getElementById('div_rima1');
var rima2 = document.getElementById('div_rima2');
var rima3 = document.getElementById('div_rima3');
var rima4 = document.getElementById('div_rima4');
var telaCarregando = document.getElementById('div_telaCarregando');
var telaInicial = document.getElementById('div_telaInicial');


setTimeout(fRima02,1700)


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
  