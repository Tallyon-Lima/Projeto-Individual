
var carregarInicial = document.getElementById('div_carregarInicial');
var videoCarregar = document.getElementById('videoCarregar');
var telaUm = document.getElementById('div_telaUm');
var telaDois = document.getElementById('div_telaDois');
var telaTres =document.getElementById('div_telaTres');
var telaQuarto = document.getElementById('div_telaQuatro');



videoCarregar.addEventListener("play", function ativar(){
    setTimeout( sairTelaCarregamento,8000);

}
); 

function sairTelaCarregamento(){
    videoCarregar.pause();  
carregarInicial.style.opacity= "0"; 
setTimeout( sairTelaCarregamento2,500);

}

function sairTelaCarregamento2(){
    carregarInicial.style.display = "none";
    telaUm.style.display = "flex";
    telaDois.style.display = "flex";
    telaTres.style.display = "flex";
    telaQuarto.style.display = "flex";
    setTimeout( sairTelaCarregamento3,500);
}

function sairTelaCarregamento3(){
    telaUm.style.opacity= "1";

    }