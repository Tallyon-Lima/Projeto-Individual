
var carregarInicial = document.getElementById('div_carregarInicial');
var videoCarregar = document.getElementById('videoCarregar');
var telaUm = document.getElementById('div_telaUm');
var telaDois = document.getElementById('div_telaDois');
var telaTres =document.getElementById('div_telaTres');
var telaQuarto = document.getElementById('div_telaQuatro');
var telaCinco = document.getElementById('div_telaCinco');
var telaCadastroU = document.getElementById('div_telaCadastroU');
var telaCadastroB = document.getElementById('div_telaCadastroB');
var loginBatalhaDiv = document.getElementById('div_loginBatalha');
var mensagemErroU2 = document.getElementById('div_mensagemErroU2');
var mensagemErroB2 = document.getElementById('div_mensagemErroB2')


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



    if(nomeCadastroU == "" ||
        emailCadastroU == "" ||
        telefoneU == 0 ||
        senhaCadastroU == "" ||
        confirmarSenhaU == ""){
            mensagemErroU2.innerHTML ='Preencha todos os dados do cadastro';
            return false;
        }else if(emailCadastroU.indexOf('@') <= 0){
            mensagemErroU2.innerHTML = 'Preencha com um email válido';
            return false;
        }else if(telefoneU.length < 11 || telaCadastroU.length > 11){
            mensagemErroU2.innerHTML = 'Preencha com telefone válido';
            return false;
        }else if(senhaCadastroU != confirmarSenhaU){
            mensagemErroU2.innerHTML = `Senhas diferentes`;
            return false;
        }else{
            mensagemErroU2.innerHTML = 'Agora faça login';
            

        }


        fetch("/usuario/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                nomeServer: nomeCadastroU,
                emailServer: emailCadastroU,
                telefoneServer: telefoneU,
                senhaServer: senhaCadastroU,
            })
        })



}

function cadastroValidoB(){
    var nomeCadastroB = input_nomeCadastroB.value;
    var siglas = input_siglas.value;
    var apresentador01 = input_apresentador01.value;
    var apresentador02 = input_apresentador02.value;
    var emailB = input_emailB.value;
    var telefoneB = input_telefoneB.value;
    var senhaB = input_senhaB.value;
    var confirmarSenhaB = input_confirmarSenhaB.value;



    if(nomeCadastroB == "" ||
        siglas == "" ||
        apresentador01 == "" ||
        emailB == "" ||
        telefoneB == 0 ||
        senhaB == "" ||
        confirmarSenhaB == ""){
            mensagemErroB.innerHTML ='Preencha todos os dados do cadastro';
            return false;
        }else if(siglas.length > 8){
            mensagemErroB.innerHTML = 'A sigla não deve ter mais de 7 letras';
            return false;
        }else if(telefoneB.length < 11 || telaCadastroB.length > 11){
            mensagemErroB.innerHTML = 'Preencha com telefone válido';
            return false;
        }/*else if(emailB.indexOf('@') <= 0){
            mensagemErroB.innerHTML = 'Preencha com um email válido';
            return false;
        }else if(senhaB != confirmarSenhaB){
            mensagemErroB.innerHTML = `Senhas diferentes`;
            return false;
        }*/else{
            mensagemErroB.innerHTML = 'Agora faça login';
            setTimeout(loginBatalha, 3000)
        }

        fetch("/batalha/cadastrarB", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                nomeServer: nomeCadastroB,
                siglasServer: siglas,
                apresentador1Server: apresentador01,
                apresentador2Server: apresentador02,
                emailBatalhaServer: emailB, 
                telefoneBatalhaServer: telefoneB,
                senhaBatalhaServer: senhaB,

            })
        })

    
}

function loginBatalha(){
    loginBatalhaDiv.style.display = "flex";
    setInterval(loginBatalha2, 500)
}

function loginBatalha2(){
    loginBatalhaDiv.style.opacity= '1';
}


function fecharLoginBatalha(){
    loginBatalhaDiv.style.opacity= '0';
    loginBatalhaDiv.style.display = "none";
}

function verificarB(){
    var emailB = input_emailCadastroB.value;
    var senhaB = input_senhaCadastroB.value;


    if (emailB == "" || senhaB == "") {
        mensagemErroB2.innerHTML = "Preencha os campos";
        return false;
    }else{
        mensagemErroB2.innerHTML = "Procurando";
    
    }

    console.log("FORM LOGIN: ", emailB);
    console.log("FORM SENHA: ", senhaB);

    fetch("/batalha/autenticarB", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailB,
            senhaServer: senhaB
        })
    })
    .then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.IDBATALHA_BATALHAS = json.idBatalha;
                sessionStorage.NOMEBATALHA_BATALHAS = json.nomeBatalha;
                sessionStorage.SIGLAS_BATALHAS = json.siglas;
                sessionStorage.APRESENTADOR1_BATALHAS = json.apresentador1;
                sessionStorage.APRESENTADOR2_BATALHAS = json.apresentador02;
                sessionStorage.EMAILBATALHA_BATALHAS = json.emailBatalha;
                sessionStorage.TELEFONEBATALHA_BATALHAS = json.telefoneBatalha;
                sessionStorage.SENHABATALHA_BATALHAS = json.senhaBatalha;
                mensagemErroB2.innerHTML = "Entrando na Dashboard";
                setTimeout(function () {
                    window.location = "../Dashboard/DashboardB.html";
                }, 3000); 
            });
        } else {
            
            console.log("Houve um erro ao tentar realizar o login!");
            
            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);    
            });
            return false;
        }
        
    }).catch(
        function (erro) {
            res.status(500).json(erro.sqlMessage );
            
    })

    setTimeout(function () {
        mensagemErroB2.innerHTML = "Email ou senha incorreto";
    }, 3000); 
}


function verificarU() {
    var emailU = input_emailLoginU.value;
    var senhaU = input_senhaLoginU.value;


    if (emailU == "" || senhaU == "") {
        mensagemErroU2.innerHTML = "Preencha os campos";
        return false;
    }else{
        mensagemErroU2.innerHTML = "Procurando";
    
    }

    console.log("FORM LOGIN: ", emailU);
    console.log("FORM SENHA: ", senhaU);

    fetch("/usuario/autenticarU", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailU,
            senhaServer: senhaU
        })
    })
    .then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.IDUSUARIO_USUARIO = json.idUsuario;
                sessionStorage.NOMEUSUARIO_USUARIO = json.nomeUsuario;
                sessionStorage.EMAILUSUARIO_USUARIO = json.emailUsuario;
                sessionStorage.SENHAUSUARIO_USUARIO = json.senhaUsuario;
                sessionStorage.TELEFONEUSUARIO_USUARIO = json.telefoneUsuario;
                mensagemErroU2.innerHTML = "Entrando na Dashboard";
                setTimeout(function () {
                    window.location = "../Dashboard/DashboardU.html";
                    console.log('Chegou aqui na lincagem')
                }, 3000); 
            });
        } else {
            
            console.log("Houve um erro ao tentar realizar o login!");
            
            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);    
            });
            return false;
        }
        
    }).catch(
        function (erro) {
            res.status(500).json(erro.sqlMessage );
            
    })

    setTimeout(function () {
        mensagemErroU2.innerHTML = "Email ou senha incorreto";
    }, 6200); 
}