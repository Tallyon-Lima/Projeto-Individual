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
siglas varchar(5),
apresentador1 varchar(45),
apresentador2 varchar(45),
emailBatalha varchar(80),
telefoneBatalha float(11),
senhaBatalha varchar(14)
)auto_increment=1000;

CREATE TABLE relacao(
fkUsuario int,
fkBatalha int,
idSeguir int,
primary key (fkUsuario, fkBatalha, idSeguir),
CONSTRAINT fkUsuarioSeguir FOREIGN KEY 	(fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT fkBatalhaSeguir FOREIGN KEY (fkBatalha) REFERENCES batalhas(idBatalha),
numeroSeguidores int,
curtidas int,
CONSTRAINT chkCurtidas CHECK (curtidas IN (1)),
CONSTRAINT chkNumeroSeguidores check (numeroSeguidores IN (1))
);

INSERT INTO usuario VALUES
(1,'Tallyon','tallyon@gmail.com','11987307133','tallyon1234'),
(2,'MC Magrão','magrao@gmail.com','11965853216', 'magrao1234'),
(3,'MC Barreto','barreto@gmail.com','11965218475','barreto1234');

INSERT INTO batalhas VALUES
(null, 'MC Alves','Mc Bob 13','Batalha da Aldeia', 'batalhadaaldeia@gmail.com', '11941873265','bda123'),
(null, 'Mc Negralha', null, 'Batalha Do Coliseu', 'batalhadocoliseu@gmail.com', '11969369825','bdc123');

INSERT INTO relacao VALUES
(1,1000,1, '1','1'),
(1,1000,2, '1','1'),
(2,1001,3,'1','1'),
(2,1000,4,'1','1');

SELECT * FROM usuario JOIN relacao ON idUsuario=fkUsuario JOIN batalhas ON fkBatalha = idBatalha;

SELECT u.nomeUsuario, b.nomeBatalha, r.numeroSeguidores FROM
 usuario AS u JOIN relacao AS r ON u.idUsuario = r.fkUsuario JOIN batalhas AS b ON r.fkBatalha = b.idBatalha;