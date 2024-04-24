create database freezeway;
use freezeway;

create table empresa (
idEmpresa int auto_increment primary key,
nomeEmpresa varchar(45),
email varchar(256),
cnpj char(14)
);

create table caminhao (
idCaminhao int auto_increment primary key,
motorista varchar(45),
placaCaminhao varchar (7),
fkEmpresa int,
constraint fkCaminhaoEmpresa foreign key (fkEmpresa) references empresa(idEmpresa));

drop table caminhao;

create table sensor (
idSensor int auto_increment primary key,
temperatura varchar(6),
nomeSensor varchar (4),
fkCaminhao int,
constraint fkCaminhaoSensor foreign key (fkCaminhao) references caminhao(idCaminhao));
SELECT*FROM sensor;
INSERT INTO sensor values (default,null, 'LM35', null);

create table dadosMedidos (
idDadosMedidos int,
fkSensor int,
constraint pkSensorDados primary key (fkSensor, idDadosMedidos),
temperatura varchar (6),
dtDadosMedidas datetime  default current_timestamp
);

INSERT INTO dadosMedidos values (1,1, '-16.50', default);

select*from dadosMedidos;

create table usuario (
idUsuario int auto_increment primary key,
emailUsuario varchar (256),
senhaUsuario varchar (30),
fkEmpresa int,
constraint fkUsuarioEmpresa foreign key (fkEmpresa) references empresa(idEmpresa));

create table produto (
idProduto int auto_increment primary key,
nomeProduto varchar(45),
qtdProduto varchar (45),
fkCaminhao int,
constraint fkProdutoCaminhao foreign key (fkCaminhao) references caminhao(idCaminhao));

