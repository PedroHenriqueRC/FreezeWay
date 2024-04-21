CREATE DATABASE FreezeWay;
USE FreezeWay;
	
CREATE TABLE Empresa(
idEmpresa int primary key auto_increment,
nome varchar(45),
email varchar(250),
cpnj Char(14)
);

CREATE TABLE Usuario (
idUsuario int primary key auto_increment,
email varchar(256),
senhaUsuario varchar(40),
fkEmpresa int,
CONSTRAINT fkUsuarioEmpresa FOREIGN KEY(fkEmpresa)
	REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Caminhao (
idCaminhao int primary key auto_increment,
motorista varchar(45),
placa varchar(15),
fkEmpresaCaminhao int,
CONSTRAINT fkCaminhaoEmpresa FOREIGN KEY(fkEmpresaCaminhao)
	REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Produto (
idProduto int primary key auto_increment,
nomeProduto varchar(45),
quantidadeProduto Varchar(10),
fkCaminhao int,
CONSTRAINT fkProdutoCaminhao FOREIGN KEY(fkCaminhao)
	REFERENCES Caminhao(idCaminhao)
);

CREATE TABLE Sensor (
idSensor int,
fkCaminhaoSensor int,
CONSTRAINT pkComposta PRIMARY KEY (idSensor,fkCaminhaoSensor),
nomeSensor varchar(15),
CONSTRAINT fkSensorCaminhao FOREIGN KEY(fkCaminhaoSensor)
	REFERENCES Caminhao(idCaminhao)
);

CREATE TABLE DadosMedidos (
idDados int primary key auto_increment,
temperatura varchar(10),
dataDados date,
fkSensor int,
CONSTRAINT fkDadosSensor FOREIGN KEY(fkSensor)
	REFERENCES Sensor(idSensor)
);