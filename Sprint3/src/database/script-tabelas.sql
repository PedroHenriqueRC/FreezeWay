-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE TABLE Empresa(
idEmpresa int primary key auto_increment,
nome varchar(45),
email varchar(250),
senha varchar(20),
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
quantidadeProduto int,	
fkCaminhao int,
fkEmpresaProduto int,
CONSTRAINT fkProdutoCaminhao FOREIGN KEY(fkCaminhao)
	REFERENCES Caminhao(idCaminhao),
CONSTRAINT fkEmpresaProduto FOREIGN KEY(fkEmpresaProduto)
	REFERENCES Empresa(idEmpresa)
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
fkProduto int,
fkEmpresaDados int,
CONSTRAINT fkDadosSensor FOREIGN KEY(fkSensor)
	REFERENCES Sensor(idSensor),
CONSTRAINT fkProdutoDados FOREIGN KEY (fkProduto)
	REFERENCES Produto (idProduto),
    CONSTRAINT fkEmpresaDados FOREIGN KEY(fkEmpresaDados)
	REFERENCES Empresa(idEmpresa)
);