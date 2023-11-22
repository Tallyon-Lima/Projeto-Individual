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
fkUsuarioS int,
fkBatalhaS int,
primary key (fkUsuarioS, fkBatalhaS),
CONSTRAINT fkUsuarioSSeguir FOREIGN KEY (fkUsuarioS) REFERENCES usuario(idUsuario),
CONSTRAINT fkBatalhaSSeguir FOREIGN KEY (fkBatalhaS) REFERENCES batalhas(idBatalha),
seguindo int,
CONSTRAINT chkSeguindoSeguidores check (seguindo IN (1))
);

CREATE TABLE rackBatalha(
idRackBatalha int primary key,
nomeMc varchar(45),
qtdTitulo int,
fkBatalhaRB int,
CONSTRAINT idRackBatalhaRackBatakha FOREIGN KEY (fkBatalhaRB) REFERENCES batalhas(idBatalha)
);


CREATE TABLE post(
idPost int,
fkBatalhaP int,
PRIMARY KEY(idPost, fkBatalhaP),
conteudo varchar(500),
imagemPost varchar(500),
dtPost DATETIME,
CONSTRAINT fkBatalhaPPost FOREIGN KEY (fkBatalhaP) REFERENCES batalhas (idBatalha)
);

CREATE TABLE curtidas(
fkPostC int,
fkUsuarioC int,
primary key(fkPostC, fkUsuarioC),
curtida int,
CONSTRAINT chkCurtidaCurtidas check (curtida IN (1)),
CONSTRAINT fkPostCCurtidas FOREIGN KEY (fkPostC) REFERENCES post(idPost),
CONSTRAINT fkUsuarioCurtidas FOREIGN KEY (fkUsuarioC) REFERENCES usuario(idUsuario)
);

INSERT INTO usuario VALUES
(1,'Tallyon','tallyon@gmail.com','11987307133','tallyon1234'),
(2,'MC Magrão','magrao@gmail.com','11965853216', 'magrao1234'),
(3,'MC Barreto','barreto@gmail.com','11965218475','barreto1234');

INSERT INTO batalhas VALUES
(null, 'Batalha da Aldeia', 'BDA' ,'Mc Bob 13', 'batalhadaaldeia@gmail.com', '11941873265','bda123', null),
(null, 'Batalha Do Coliseu', 'BDC', 'Mc Negralha', 'batalhadocoliseu@gmail.com', '11969369825','bdc123', null);

 
SELECT * FROM usuario;

 SELECT * FROM batalhas;
