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
    nomeProduto VARCHAR(45),
    qtdProduto int,
    fkEmpresa INT,
    CONSTRAINT fkCaminhaoEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa(id)
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
    fkCaminhao INT,
    CONSTRAINT fkDadosCaminhao FOREIGN KEY (fkCaminhao) REFERENCES caminhao(idCaminhao)
);

INSERT INTO empresa (nome, cnpj, email, senha) VALUES ('Pedro', '12345678901234', 'pedrohenrique@gmail.com', '123456789');
INSERT INTO sensor (nomeSensor, fkCaminhao) VALUES ('LM35', 1);
INSERT INTO dadosMedidos (idDadosMedidos,fkSensor, temperatura, fkProduto) VALUES (9,4,'-16.50', 6);


SELECT*from dadosmedidos;

SELECT
    caminhao.idCaminhao,        
    caminhao.motorista,
    dadosMedidos.dtDadosMedidas,
    dadosMedidos.temperatura,
    caminhao.nomeProduto
FROM caminhao
JOIN dadosMedidos
    ON dadosMedidos.fkCaminhao = caminhao.idCaminhao
INNER JOIN empresa
    ON caminhao.fkEmpresa = empresa.id where caminhao.fkEmpresa=1
GROUP BY 
    caminhao.fkEmpresa, 
    caminhao.idCaminhao, 
    dadosMedidos.dtDadosMedidas,
    caminhao.nomeProduto, 
    dadosMedidos.temperatura;
    
show tables;

INSERT INTO Empresa Values
();

INSERT INTO Caminhao VALUES
(DEFAULT,"Pedro",'BX01211','Picanha',10,1);

select*from empresa;
select*from caminhao;
select*from sensor;
select*from dadosmedidos;





