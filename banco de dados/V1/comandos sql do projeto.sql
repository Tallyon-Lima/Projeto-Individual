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
nomeBatalha varchar(70),
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
CONSTRAINT fkUsuarioSSeguir FOREIGN KEY (fkUsuarioS) REFERENCES usuario(idUsuario),
CONSTRAINT fkBatalhaSSeguir FOREIGN KEY (fkBatalhaS) REFERENCES batalhas(idBatalha),
seguindo int,
CONSTRAINT chkSeguindoSeguidores check (seguindo IN (1))
);

CREATE TABLE rackBatalha(
idRackBatalha int primary key auto_increment,
nomeMc varchar(45),
qtdTitulo int,
fkBatalhaRB int,
CONSTRAINT idRackBatalhaRackBatakha FOREIGN KEY (fkBatalhaRB) REFERENCES batalhas(idBatalha)
);


CREATE TABLE post(
idPost int auto_increment primary key,
fkBatalhaP int,
conteudo varchar(500),
imagemPost varchar(500),
dtPost DATETIME,
CONSTRAINT fkBatalhaPPost FOREIGN KEY (fkBatalhaP) REFERENCES batalhas (idBatalha)
);


INSERT INTO usuario VALUES
(1,'Tallyon','tallyon@gmail.com','11987307133','tallyon1234'),
(2,'MC Magrão','magrao@gmail.com','11965853216', 'magrao1234'),
(3,'MC Barreto','barreto@gmail.com','11965218475','barreto1234');

INSERT INTO batalhas VALUES
(null, 'Batalha da Aldeia', 'BDA' ,'Mc Bob 13', 'batalhadaaldeia@gmail.com', '11941873265','bda123', null),
(null, 'Batalha Do Coliseu', 'BDC', 'Mc Negralha', 'batalhadocoliseu@gmail.com', '11969369825','bdc123', null);

INSERT INTO Post VALUES 
(null, 1000, 'Teste feed', 'batalha_da_aldeia.png', CURRENT_TIMESTAMP),
(null, 1001, 'CAMPEÕES DA EDIÇÃO DE RETORNO DA BATALHA DO TANQUE','batalha_do_tanque.png', CURRENT_TIMESTAMP); 


SELECT * FROM post;

SELECT * FROM post AS p
    JOIN batalhas AS b ON p.fkBatalhaP = b.idBatalha
    Order BY p.dtPost DESC;