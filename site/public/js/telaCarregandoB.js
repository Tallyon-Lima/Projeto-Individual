var telaCarregando = document.getElementById('div_telaCarregando');
var rima1 = document.getElementById('div_rima1');
var rima2 = document.getElementById('div_rima2');
var rima3 = document.getElementById('div_rima3');
var rima4 = document.getElementById('div_rima4');



setTimeout(fRima02, 1700)


function fRima02() {
  rimasC.innerHTML = `2...`;
  setTimeout(fRima03, 1000)
}

function fRima03() {
  rimasC.innerHTML = `1...`
  setTimeout(fRima04, 1000)
}

function fRima04() {
  rimasC.innerHTML = `Rima!!!`;
  setTimeout(trocarTela, 1800);
}


function trocarTela() {
    telaCarregando.style.opacity = "0";
    setTimeout(trocarTela2, 500);
  }

function trocarTela2(){
    telaCarregando.style.display = "none";
    setTimeout(trocarTela3, 500);
}

function trocarTela3(){
    window.location.href = "../Dashboard/DashboardB.html";
}