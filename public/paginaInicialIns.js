
var carregarInicial = document.getElementById('div_carregarInicial');
var videoCarregar = document.getElementById('videoCarregar');
var telaUm = document.getElementById('div_telaUm');
var telaDois = document.getElementById('div_telaDois');
var telaTres =document.getElementById('div_telaTres');
var telaQuarto = document.getElementById('div_telaQuatro');
var telaCinco = document.getElementById('div_telaCinco');
var telaCadastroU = document.getElementById('div_telaCadastroU');
var telaCadastroB = document.getElementById('div_telaCadastroB');



function ativarVideo(){
   if(videoCarregar.paused){
    videoCarregar.play()
    document.getElementById('botaoAtivar')
   }else{
    videoCarregar.pause();
    document.getElementById('botaoAtivar')
   }

}

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
    telaCinco.style.display = "flex";
    setTimeout( sairTelaCarregamento3,500);
}

function sairTelaCarregamento3(){
    telaUm.style.opacity= "1";
    telaDois.style.opacity= "1";
    telaTres.style.opacity= "1";
    telaQuarto.style.opacity= "1";
    telaCinco.style.opacity= "1";

    }




function cadastroU(){
    telaUm.style.opacity= "0";
    telaDois.style.opacity= "0";
    telaTres.style.opacity= "0";
    telaQuarto.style.opacity= "0";
    telaCinco.style.opacity= "0";

    setTimeout(cadastroU2,500);
}

function cadastroU2(){
    telaUm.style.display = "none";
    telaDois.style.display = "none";
    telaTres.style.display = "none";
    telaQuarto.style.display = "none";
    telaCinco.style.display = "none";
    telaCadastroU.style.display = "flex";
    setTimeout( cadastroU3,500);
}

function cadastroU3(){
    telaCadastroU.style.opacity="1";
}




function voltarInicio(){
    telaCadastroU.style.opacity="0";
    telaCadastroB.style.opacity="0";
    setTimeout(voltarInicio2,500);
}

function voltarInicio2(){
    telaUm.style.display = "flex";
    telaDois.style.display = "flex";
    telaTres.style.display = "flex";
    telaQuarto.style.display = "flex";
    telaCinco.style.display = "flex";
    telaCadastroU.style.display = "none";
    telaCadastroB.style.display = "none";
    setTimeout(voltarInicio3,500);
}

function voltarInicio3(){
    telaUm.style.opacity= "1";
    telaDois.style.opacity= "1";
    telaTres.style.opacity= "1";
    telaQuarto.style.opacity= "1";
    telaCinco.style.opacity= "1";
}



function cadastroB(){
    telaCadastroU.style.opacity="0";
    setTimeout(cadastroB2,500);
}

function cadastroB2(){
    telaCadastroU.style.display = "none";
    telaCadastroB.style.display = "flex";
    setTimeout(cadastroB3,500);
}

function cadastroB3(){
    telaCadastroB.style.opacity="1";
}

function voltarCadastroU(){
    telaCadastroB.style.opacity = "0";
    setTimeout(voltarCadastroU2, 500);
}

function voltarCadastroU2(){
    telaCadastroU.style.display = "flex";
    telaCadastroB.style.display = "none";
    setTimeout(voltarCadastroU3, 500);
}

function voltarCadastroU3(){
    telaCadastroU.style.opacity="1";
}



function cadastroValidoU(){
    var nomeCadastroU = input_nomeCadastroU.value;
    var emailCadastroU = input_emailCadastroU.value;
    var telefoneU = input_telefoneU.value;
    var senhaCadastroU = input_senhaCadastroU.value;
    var confirmarSenhaU = input_confirmarSenhaU.value;

    var caractere_especial = 
    senhaCadastroU.indexOf('!') >=0 ||
    senhaCadastroU.indexOf('@') >=0 ||
    senhaCadastroU.indexOf('#') >=0 ||
    senhaCadastroU.indexOf('$') >=0 ||
    senhaCadastroU.indexOf('%') >=0 ||
    senhaCadastroU.indexOf('&');


    if(nomeCadastroU == undefined ||
        emailCadastroU == undefined ||
        telefoneU == 0 ||
        senhaCadastroU == undefined ||
        confirmarSenhaU == undefined){
            mensagemErroU.innerHTML ='Preencha todos os dados do cadastro';
        }else if(emailCadastroU.indexOf('@') <= 0){
            mensagemErroU.innerHTML = 'Preencha com um email válido';
        }else if(telefoneU.length < 11 || telaCadastroU.length > 11){
            mensagemErroU.innerHTML = 'Preencha com telefone válido';
        }else if(senhaCadastroU != confirmarSenhaU){
            mensagemErroU.innerHTML = `Senhas diferentes`
        }else{
            mensagemErroU.innerHTML = '';

            window.location.href = "./DashboardU.html"
        }
}

function cadastroValidoB(){
    var nomeCadastroB = input_nomeCadastroB.value;
    var siglas = input_siglas.value;
    var apresentador01 = input_apresentador01.value;
    var apresentador02 = input_apresentador02.value;
    var emailCadastroB = input_emailCadastroB.value;
    var telefoneB = input_telefoneB.value;
    var senhaCadastroB = input_senhaCadastroB.value;
    var confirmarSenhaB = input_confirmarSenhaB.value;

    var caractere_especial = 
    senhaCadastroB.indexOf('!') >=0 ||
    senhaCadastroB.indexOf('@') >=0 ||
    senhaCadastroB.indexOf('#') >=0 ||
    senhaCadastroB.indexOf('$') >=0 ||
    senhaCadastroB.indexOf('%') >=0 ||
    senhaCadastroB.indexOf('&');


    if(nomeCadastroB == undefined ||
        siglas == undefined ||
        apresentador01 == undefined ||
        emailCadastroB == undefined ||
        telefoneB == 0 ||
        senhaCadastroB == undefined ||
        confirmarSenhaB == undefined){
            mensagemErroB.innerHTML ='Preencha todos os dados do cadastro';
        }else if(siglas.length > 5){
            mensagemErroB.innerHTML = 'A sigla não deve ter mais de 4 letras';
        }else if(emailCadastroB.indexOf('@') <= 0){
            mensagemErroB.innerHTML = 'Preencha com um email válido';
        }else if(telefoneB.length < 11 || telaCadastroB.length > 11){
            mensagemErroB.innerHTML = 'Preencha com telefone válido';
        }else if(senhaCadastroB != confirmarSenhaB){
            mensagemErroB.innerHTML = `Senhas diferentes`
        }else{
            mensagemErroB.innerHTML = '';

            window.location.href = "./Dashboard.html"
        }
}