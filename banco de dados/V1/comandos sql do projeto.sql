DROP DATABASE PontoDaBatalha;

CREATE DATABASE PontoDaBatalha;
USE PontoDaBatalha;

CREATE TABLE usuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
emailUsuario varchar(70),
telefoneUsuario float(11),
senhaUsuario varchar(14)
);

CREATE TABLE batalhas(
idBatalha int primary key auto_increment,
nomeBatalha varchar(70) unique,
siglas varchar(7),
apresentador1 varchar(45),
emailBatalha varchar(80),
telefoneBatalha float(11),
senhaBatalha varchar(14),
imagem varchar(500)
)auto_increment=1000;
 
CREATE TABLE seguidores(
idSeguidor int primary key auto_increment,
fkUsuarioS int,
fkBatalhaS int,
fkBatalhaSeguindo int,
CONSTRAINT fkUsuarioSSeguir FOREIGN KEY (fkUsuarioS) REFERENCES usuario(idUsuario),
CONSTRAINT fkBatalhaSSeguir FOREIGN KEY (fkBatalhaS) REFERENCES batalhas(idBatalha),
CONSTRAINT fkBatalhaSeguindoSeguir FOREIGN KEY (fkBatalhaSeguindo) REFERENCES batalhas(idBatalha),
seguindo int,
CONSTRAINT chkSeguindoSeguidores check (seguindo IN (1))
);

CREATE TABLE rackBatalha(
idRackBatalha int primary key auto_increment,
nomeMc varchar(45),
qtdPonto int,
fkBatalhaRB int,
CONSTRAINT idRackBatalhaRackBatakha FOREIGN KEY (fkBatalhaRB) REFERENCES batalhas(idBatalha)
);


CREATE TABLE post(
idPost int auto_increment primary key,
fkBatalhaP int,
conteudo varchar(1200),
imagemPost varchar(700),
dtPost DATETIME,
CONSTRAINT fkBatalhaPPost FOREIGN KEY (fkBatalhaP) REFERENCES batalhas (idBatalha)
);


INSERT INTO usuario VALUES
(1,'Tallyon','tallyon@gmail.com','11987307133','tallyon1234'),
(2,'MC Magrão','magrao@gmail.com','11965853216', 'magrao1234'),
(3,'MC Barreto','barreto@gmail.com','11965218475','barreto1234');

INSERT INTO batalhas VALUES
(null, 'Batalha Da Aldeia', 'BDA' ,'Mc Bob 13', 'batalhadaaldeia@gmail.com', '11941873265', 'bda123', 'batalha_da_aldeia.png'),
(null, 'Batalha Do Coliseu', 'BDC', 'Mc Negralha', 'batalhadocoliseu@gmail.com', '11969369825', 'bdc123', 'batalha_do_coliseu.png'),
(null, 'Batalha Da Brasilândia', 'BDB', 'Não sei', 'batalhadabrasilandia@gmail.com', '11957424837', 'bdb1233', 'batalha_da_brasilandia.png'),
(null, 'Batalha Da Leste', 'BDL', 'Não sei', 'batalhadaleste@gmail.com', '11934567898', 'bdl123', 'batalha_da_leste.png'),
(null, 'Batalha Da Linear', 'BDL', 'Não sei', 'batalhadalinear@gmail.com', '11908647645', 'bdl123', 'batalha_da_linear.png'),
(null, 'Batalha Da Norte', 'BDN', 'Não Sei', 'batalhadanorte@gmail.com', '11945357654', 'bdn123', 'batalha_da_norte.png'),
(null, 'Batalha Do Ana Rosa', 'BDAR', 'Não sei', 'batalhadoanarosa@gmail.com', '1196573712', 'bdar123', 'batalha_do_ana_rosa.png'),
(null, 'Batalha Do Tanque', 'BDT', 'Não Sei', 'batalhadotanque@gmai.com','11965412478', 'bdt123', 'batalha_do_tanque.png'),
(null, 'Batalha 321 Tempo', 'BDC', 'Não Sei', 'batalha321tempo@gmail.com', '11965243187', 'b321tempo','batalha_321tempo.png'),
(null, 'Batalha Do Estudante', 'BDE', 'Não Sei', 'batalhadoestudante@gmail.com', '11954435232', 'bde123', 'batalha_do_estudante.png'),
(null, 'Batalha Do Nacional', 'BDN', 'Não Sei', 'batalhadonacional@gmail.com', '1192744709', 'bdn123', 'batalha_nacional.png');


INSERT INTO Post VALUES 
(null, 1000, 'CAMPEÃO CHEGOU!<br>Se preparando pro Nacional, @kroyemici tá mais focado do que nunca, 
e vem pra defender o título nessa edição! O neguinho de Mogi vai fazer esse viaduto tremer!', 'kroy_bda.jpg', CURRENT_TIMESTAMP),
 (null, 1001, 'A HORA CHEGOU!<br>Passaram-se 4 anos, quando 3 Mcs criaram uma batalha no Méier, 
 com o objetivo de ser diferente, de revolucionar um estado. Após 4 anos, a marca de 500.000 mil inscritos chegou,
 e ela pede por algo HISTÓRICO!<br> Bem vindos a MAIOR! A primeira edição de trio da Batalha do Coliseu.<br>
“O COLISEU TÁ EM TUDO!”','coliseu500k_bdc.jpg', CURRENT_TIMESTAMP),
 (null, 1002, 'QUARTA É DIA DE BRASILÂNDIA EDIÇÃO 102°<br>COM OU SEM CHUVA , VENHAM AGASALHADOS !!!
<br>30 segundos 3º round 4 voltas de 2 versos !!!<br>Período de inscrição : 19 as 20:30<br>
CHEGUEM CEDO MCS ATRASADOS NÃO VÃO PRA SORTEIO !!!!<br>14 vagas pra sorteio<br>2 vagas diversidade<br>
A batalha começa 20 EM PONTO<br>Praça Benedicta Cavalheiro','informacao_bdb.jpg', CURRENT_TIMESTAMP),
 (null, 1003, 'A GRANDE CAMPEÃ DA PRIMEIRA RODADA DA CONFERÊNCIA LESTE NA @batalhadocarrao 
 FOI A BRABA @juh_altao EM UMA FINAL MONSTRA CONTRA O @jorginmc011, OS DOIS REPRESENTANDO A @batalhadaarte<br>
QUE NOITE INCRÍVEL!!! <br>AGRADECEMOS À TODOS QUE COLARAM!!! ”','juh_altao_bdl.jpg', CURRENT_TIMESTAMP),
 (null, 1004, 'UMA ÓTIMA TARDE PARA TODOSSSSS!😍<br>
A PARTIR DAQUI INICIAREMOS MAIS POSTAGENS DE CONFIRMADOS PRA HOJE.<br>
ENTÃO, INICIALMENTE, FALAREMOS DESSES ARTISTAS QUE ALÉM DE MANDAR UMAS RIMAS COMPACTAS NA MENTE DOS OPONENTES,<br>
MONTAM IMPROVISADOS VERSÁTIL QUE ELEVA O CLIMA ABENÇOADO DO NOSSO PARQUE…,<br>
FAZENDO COM O QUE A ATENÇÃO VOLTADA AOS ROUNDS SEJA COMPLETAMENTE ATENCIOSA A CADA VERSO!
😱😱😱😱😱😱😱😱😱😱😱😱😱😱<br>BEM VINDOS GUERREIROS E GUERREIRAS, ESTÁ CASA VEZ MAIS PERTO… AGORA, FALTA APENAS ALGUMAS HORINHAS!
😁😁😁😁😁😁😁😁😁😁😁😁😁😁','vh_tavin_bdn.jpg', CURRENT_TIMESTAMP),
 (null, 1005, 'Daqui a pouco estaremos ao vivo com eles🔥','informacoes_bdn.jpg', CURRENT_TIMESTAMP),
 (null, 1006, 'É PAPO RETO QUE CÊS QUER ? 😱🌹🔥<br>Nosso SEGUNDO trio é a junção mais sangrenta possível !!<br>
🌹Kroy - O representante nacional de SP, vulgo o neguin de Mogi, 11x campeão do Ana Pink e maior campeão do Ana Pink de 2021 !!<br>
🌹Litch - O mais underground de SP, maior campeão do Ana Pink de 2022, o famoso matador de Rugal e Heptacampeão do Ana PinK!!<br>
🌹Magrão - O caramelo do improviso, um dos maiores do freestyle BR, tetracampeão do Ana Pink e lenda da ZS de São Paulo, Wadawéu !!<br>
Obs: Esse trio é um dos 4 trios que possui a vantagem de começar na Segunda Fase !!<br>
🌹JUNTOS ELES POSSUEM 22 TÍTULOS DO ANA PINK<br>Será que esse trio vai levar o tão esperado título ?',
'kroy_litch_magrao_bdar.jpg', CURRENT_TIMESTAMP),
 (null, 1007, 'Rugal campeão da Batalha do Tanque somando 28 títulos na casa ‼️‼️🔥🔥🔥 @mcmalagueta',
'malagueta_bdt.jpg', CURRENT_TIMESTAMP),
(null, 1008, 'Salve família daqui a pouco as 18h no canal do @rapboxoficial no YouTube e nas plataformas digitais teremos 
o lançamento de “ A DIVINA COMÉDIA 3” então já fiquem preparados e não esqueçam de curtir, comentar e compartilhar',
 'informacao_321tempo.jpg', CURRENT_TIMESTAMP),
 (null, 1009, 'o modo desafio da @batalhadosestudantes
 fez o caldeirão pegar fogo! a história foi escrita com o @kairosdoflow sendo campeão numa batalha insana contra o @brennuz_ 🔥🔥',
'brennuz_bde.heic', CURRENT_TIMESTAMP),
(null, 1010, 'REPESCAGENS 2023<br>SE LIGA NA DISTRIBUIÇÃO DAS CHAVES! ✅⬇️<br>
Tá no ar, família! Na noite desta quarta-feira, 22/11, transmitimos ao vivo o sorteio das repescagens para o Nacional 2023
 e tamo encostando por aqui pra compartilhar com geral a distribuição das chaves!<br>
As batalhas rolam nos próximos dias, 25 e 26/11, sábado e domingo, a partir das 17H,
 com transmissão ao vivo pelo nosso canal (link na bio).<br>
🗓️ SÁBADO - 25/11','nacional3.jpg', CURRENT_TIMESTAMP);

INSERT INTO post VALUES
(null, 1000, 'KROY SE APROXIMA!<br> O jogo pode virar, @oi_guri perdeu um ponto após perder na primeira fase,
 e @kroyemici vem se aproximando depois de ser campeão da BDA 351!','ranking_bda.jpg', CURRENT_TIMESTAMP),
(null, 1001, 'O VOO RASANTE!<br>Primeiro trio anunciado, é uma junção de ouro, de 3 dos melhores freestyles do país!<br>
@magrao.97 o cachorro caramelo, o homem que assustou o Brasil como um vulto, não ia ficar fora dessa edição especial, 
ele que é um pedaço do Coliseu em SP!
<br>@oi_guri o vagalume boy, o recordista de Aldeias em um ano, é também o homem fora do RJ que mais acumulou títulos do Coliseu!
<br>@zed.rj a Katana do Coliseu, segundo maior campeão do Coliseu, que vem ganhando espaço em competições pelo Brasil, 
o homem que traz versos e métricas que só ele tem!!<br>O jogo começou!','zed_magrao_guri_bdc.jpg', CURRENT_TIMESTAMP),
(null, 1002, 'QUARTA FEIRA TEM BRASILÂNDIA EDIÇÃO PERSONAGEM!!!!<br>
COMO FUNCIONA: TEREMOS DIVERSOS PERSONAGENS ALEATÓRIOS PARA SEREM SORTEADOS, O MC QUE TIRAR O PAPEL DO PERSONAGEM VAI 
SER ELE DURANTE O ROUND, E O OUTRO MC A MESMA COISA. OS DOIS ROUNDS SERÃO COM PERSONAGENS DIFERENTES E O 
TERCEIRO ROUND TEM A OPÇÃO DE SER BATE VOLTA DE PERSONAGEM OU TRADICIONAL DE SANGUE, OS MCS ESCOLHEM!!!<br>
BOOORA QUE EU QUERO VER TONINHO TORNADO X ALBERT EINSTEIN ','edicao_especial_bdb.heic', CURRENT_TIMESTAMP),
(null, 1003, 'HOJE É DIA HEINNN!!!<br>Hoje rola a terceira etapa da CONFERÊNCIA LESTE! E pdp que com certeza vai pegar fogo<br>
A edição vai rolar no mesmo lugar de sempre, a partir das 15h no final da passarela que liga o metrô Itaquera a Arena Corinthians!<br>
Convoca geral e brota muito porque vai ser PESADELO!!!','conferencia_bdl.jpg', CURRENT_TIMESTAMP),
(null, 1004, 'CAÍMOS NA PRESSÃO DE VOCÊS NOS PERGUNTANDO SOBRE OS PRÓXIMOS CONFIRMADOS!!!<br>
E PRA QUEM FICOU NA CURIOSIDADE DE SABER, ESTÁ AÍ A SEGUNDA DUPLA PARA AMANHÃ!!<br> "PO LINEAR MAS SERÃO APENAS ESSAS?!”<br>
CALMAAAAAA MAS É CLARO QUE NÃO, PORÉM NOTARAM BEM OS ARTISTAS QUE SE ENCOTRA NESSE FLYER?<br>
PARECE SURREAL UMAS PARADA DESSA MAS, NOVENTA E MARIA REALMENTE ESTARÃO PRESENTES EM NOSSA EDIÇÃO!<br>
FAZENDO JUS DE TODO CONHECIMENTO E HABILIDADE QUE ADQUIRIRAM PERCORRENDO LUGARES QUE A GENTE MESMO, NEM IMAGINAMOS…<br>
EM PROL DE UM GRANDE SONHO, DECIDIRAM FAZER PARTE DA CENA E JÁ CHEGARAM PROVANDO QUE AGUENTA ESSE GRANDE FARDO!<br>
AH, AINDA NÃO SE CONVENCEU?! OK, FAZ ASSIM… COLA NESSA TERÇA FEIRA QUE TERÁ UMA GRANDE PROVA DO QUE ESTAMOS FALANDO!<br>
E SEJAM TODOS BEM VINDOS! ❤️','noventa_e_maria_bdn.jpg', CURRENT_TIMESTAMP),
(null, 1005, 'GOMES CAMPEÃO DA BATALHA DA NORTEEEEE!!!!<br>
Numa final ESPETACULAR contra o monstro @killuajacarealbino , a maquina mortifera do DF levou sua SEGUNDA Norte pra casa.<br>
Semana que vem tem rap!','gomes_bdn.jpg', CURRENT_TIMESTAMP),
(null, 1006, 'Guri 12x Campeão do Ana Pink 🌹🔥<br> 
Ganhando 2x seguidas ele vai em busca do Hat Trick e de se tornar sozinho o maior campeão !!!<br>@oi_guri<br>
Chave: Jandera, Gomes, Youngui, Dopre','guri_bdar.jpg', CURRENT_TIMESTAMP),
(null, 1007, 'THE KING JHONY 🏆🔥<br>
📍Cheguem cedo na praça do EX-Combatente a partir das 19:30h , Transmissão no TIK…','jhonny_bdt.jpg', CURRENT_TIMESTAMP),
(null, 1009, 'O GOAT DE GR QUE FALA!<br>
Representação de um sonho, de uma realidade, @jotape4real vai chegar com nós na última desse ano pra trazer aquilo que ele mais sabe
','jotape_bde.jpg', CURRENT_TIMESTAMP),
(null, 1010, 'COLA COM NÓIS NAS REPESCAGENS!<br>Bora concluir o processo seletivo do Brasileirão das batalhas, família! 🔥✅<br>
Hoje e amanhã (25 e 26/11) tem repescagem pra decidir quem vai ocupar as 5 vagas restantes na grande final nacional!<br>
As batalhas vão rolar no app Discord, com transmissão espelhada pelo YouTube, e geral quer saber:<br>
Quem será que vai garantir classificação na disputa das repescagens?','nacional2.jpg', CURRENT_TIMESTAMP);

INSERT INTO post VALUES
(null, 1000, 'ESTRELAS DA RODADA - BDA 351!<br>Os dois monstros que estão no Nacional @neobxd e @kroyemici,
 ganharam a premiação das Estrelas da rodada, após protagonizarem a melhor batalha da BDA 351!','kroy_e_neo_bda.jpg', CURRENT_TIMESTAMP),
(null, 1001, 'Em junho de 2019, nascia o maior projeto de nossas vidas, e um sonho. 
Uma das batalhas que renovou o sonho de um estado e se consolidou como uma das maiores do Brasil!<br>
E chegou o momento que muitos pediam! O PRIMEIRO ANIVERSÁRIO OFICIAL DA BATALHA DO COLISEU!<br>
Dia 27.06 na praça da bandeira, nós faremos nossa maior edição! Com a presença de nomes gigantes do freestyle nacional!
<br> E o apoio de grandes patrocinadores que divulgaremos nos próximos dias!
<br>Save The Date! A Maior do Rio está em festa!', 'coliseu4_bdc.jpg', CURRENT_TIMESTAMP),
(null, 1002, 'NÃO FICO DAHORA PROS MCS PELA 2 VEZ NO ANO @nao_ta_daora campeão da edição 102° da BDB em uma final muito loca com
 @nicaodanorte velho conhecido da casa !!!!! Além da folha sagrada ganhou aquela dose da nossa patrocinadora @emporiocmdrinks !!! 
 Semana que vem tem mais , sexta começa sair os videos no canal', 'naoficoudahora_bdb.jpg', CURRENT_TIMESTAMP),
(null, 1003, 'CONFERÊNCIA ARTE?<br>A @batalhadaarte dominou a segunda etapa da CONFERÊNCIA LESTE 
que foi realizada na própria Batalha da Arte, novamente colocaram dois mcs na final e deixou os scouts da Arte altíssimos<br>
@jorginmc011 tem sido o destaque da competição até então, duas edições e duas finais e de 8 batalhas 5 twolalas',
 '', CURRENT_TIMESTAMP),
(null, 1004, 'COMO ANDAM DIZENDO POR AÍ… A LINEAR A CADA TERÇA FEIRA SE SUPERA…UMA EDIÇÃO MAIS LINDA DO QUE A OUTRA!!!!
😍😍😍😍😍😍😍😍😍😍😍😍😍<br>E VOCÊS SABEM POR QUE NÉ? CLARO QUE É ISSO! PORQUE CADA UM DE VOCÊS FAZ ESSA CENA ACONTECER JUNTO COM A GENTE!!!',
 'plateia_bdn.jpg', CURRENT_TIMESTAMP), 
(null, 1005, 'Tudo sobre o formato do Ragnarok!<br>Confira como vai funcionar o maior evento da Norte pra não ficar com dúvidas.
<br>Lembrando que é dia 16/12 e logo mais os ingressos estão no ar!<br>Vamos fazer história ou não?',
 'tagnarok_bdn.jpg', CURRENT_TIMESTAMP), 
(null, 1006, '🌹🌹🌹<br>Informações em breve !!<br>Aguardem…<br> Venda de ingressos em breve', 'edicao_trio_bdar.jpg', CURRENT_TIMESTAMP), 
(null, 1007, 'Sim, foi empate técnico com @mcjhony_oficial e @mcfael e isso é TANK !', 'jhonny_fael_bdt.jpg', CURRENT_TIMESTAMP), 
(null, 1009, '@barretoemici campeão da midnight tune 2!!!!<br>
Que noite incrível, surreal, demoramos até pra postar de tão incrível que foi!
 Obrigado a todos que encostaram e prestigiaram o que aconteceu que foi mágico!', 'plateia_bde.jpg', CURRENT_TIMESTAMP), 
 (null, 1010, 'Geral tá dizendo que essa edição promete! E vocês, família, o que esperam da grande final nacional de 2023?<br>
03 de dezembro é logo ali! 🗓️💥❤️<br>
A lista dos/da 27 campeões/campeã estaduais tá completa! E ainda faltam 5 vagas a serem conquistadas na disputa das repescagens.<br>
Fica na sintonia e cola com Nóis! 🔥⬇️<br>*MCS FINALISTAS*<br>1 - @lorrann._ (MG)<br>2 - @pitbull.astro (SE)<br>3 - @kire_mcz (AL)<br>
4 - @elle_mc_ (AM)<br>5 - @puggazs (RO)<br>6 - @aleson_agr (PI)<br>7 - @wallyson_wm_ (AC)<br>8 - @hadesmc1 (MA)<br>9 - @brr.netto (AP)<br>
10 - @adilsin_etnia (PR)
', 'naciona1.jpg', CURRENT_TIMESTAMP);


INSERT INTO seguidores(idSeguidor,fkUsuarioS, fkBatalhaS, seguindo) VALUES
(1, 1, 1001, 1),
(2, 1, 1000, 1);

INSERT INTO seguidores(idSeguidor, fKBatalhaS, fkBatalhaSeguindo, seguindo) VALUES
(null, 1001, 1000, 1);

INSERT INTO rackBatalha VALUES 
(null, 'Guri' , 119, 1000),
(null, 'Neo' , 80, 1000),
(null, 'Jhony' , 59, 1000),
(null, 'Prado' , 57, 1000),
(null, 'Magão' , 53, 1000);


SELECT * FROM seguidores;		

SELECT * FROM batalhas JOIN seguidores ON fkBatalhaS = idBatalha;

SELECT * FROM post;

SELECT * FROM batalhas;		

SELECT * FROM usuario;

SELECT * FROM post AS p
    JOIN batalhas AS b ON p.fkBatalhaP = b.idBatalha
    Order BY p.dtPost DESC;
    
SELECT nomeBatalha FROM batalhas WHERE 
nomeBatalha like '%%'; 

 SELECT imagem FROM batalhas;
 
 delete from seguidores where fkBatalhaSeguindo = 1000 and fkBatalhaS = 1000;
 
 select sum(seguindo) from seguidores JOIN batalhas ON idBatalha = fkBatalhaS
 WHERE nomeBatalha = 'Batalha Da Aldeia';
 
 select seguindo from seguidores where fkBatalhaS = 1004 and fkBatalhaSeguindo = 1000;
 
 
 
 
 
 SELECT * FROM post JOIN Batalhas ON fkBatalhaP = idBatalha WHERE nomeBatalha = 'Batalha Da Aldeia'
 ORDER BY dtPost DESC;