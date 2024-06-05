CREATE DATABASE freezeway;
USE freezeway;

-- Criando a tabela empresa
CREATE TABLE empresa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cnpj CHAR(14),
    email VARCHAR(256),
    senha VARCHAR(20)
);

-- Criando a tabela caminhao
CREATE TABLE caminhao (
    idCaminhao INT AUTO_INCREMENT PRIMARY KEY,
    motorista VARCHAR(45),
    placaCaminhao VARCHAR(7),
    fkEmpresa INT,
    CONSTRAINT fkCaminhaoEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa(id)
);

-- Criando a tabela produto
CREATE TABLE produto (
    idProduto INT AUTO_INCREMENT PRIMARY KEY,
    nomeProduto VARCHAR(45),
    qtdProduto VARCHAR(45),
    fkCaminhao INT,
    CONSTRAINT fkProdutoCaminhao FOREIGN KEY (fkCaminhao) REFERENCES caminhao(idCaminhao)
);

-- Criando a tabela sensor
CREATE TABLE sensor (
    idSensor INT AUTO_INCREMENT PRIMARY KEY,
    nomeSensor VARCHAR(4),
    fkCaminhao INT,
    CONSTRAINT fkCaminhaoSensor FOREIGN KEY (fkCaminhao) REFERENCES caminhao(idCaminhao)
);

-- Criando a tabela dadosMedidos
CREATE TABLE dadosMedidos (
    idDadosMedidos INT,
    fkSensor INT,
    temperatura VARCHAR(6),
    dtDadosMedidas DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkProduto INT,
    CONSTRAINT pkSensorDados PRIMARY KEY (fkSensor, idDadosMedidos),
    CONSTRAINT fkDadosProduto FOREIGN KEY (fkProduto) REFERENCES produto(idProduto)
);

INSERT INTO empresa (nome, cnpj, email, senha) VALUES ('Pedro', '12345678901234', 'pedrohenrique@gmail.com', '123456789');
INSERT INTO produto (nomeProduto, qtdProduto, fkCaminhao) VALUES ('picanha', '50', 1);
INSERT INTO sensor (nomeSensor, fkCaminhao) VALUES ('LM35', 1);
INSERT INTO dadosMedidos (idDadosMedidos,fkSensor, temperatura, fkProduto) VALUES (5,4,'-16.50', 2);

SELECT*FROM produto;

SELECT
    caminhao.idCaminhao,        
    dadosMedidos.dtDadosMedidas,
    dadosMedidos.temperatura,
    produto.nomeProduto
FROM caminhao
JOIN produto
    ON caminhao.idCaminhao = produto.fkCaminhao
INNER JOIN dadosMedidos
    ON dadosMedidos.fkProduto = produto.idProduto
INNER JOIN empresa
    ON caminhao.fkEmpresa = empresa.id where id=1
GROUP BY 
    caminhao.fkEmpresa, 
    caminhao.idCaminhao, 
    dadosMedidos.dtDadosMedidas,
    produto.nomeProduto, 
    dadosMedidos.temperatura;


show databases;