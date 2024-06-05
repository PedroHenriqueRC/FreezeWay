create database freezeway;
use freezeway;

create table empresa (
	id int primary key auto_increment,
	nome VARCHAR(100),
    cnpj char(14),
	email VARCHAR(256),
	senha VARCHAR(20)
);

select*from empresa;

create table caminhao (
idCaminhao int auto_increment primary key,
motorista varchar(45),
placaCaminhao varchar (7),
fkEmpresa int,
constraint fkCaminhaoEmpresa foreign key (fkEmpresa) references empresa(id)
);

select*from caminhao;

create table sensor (
idSensor int auto_increment primary key,
nomeSensor varchar (4),
fkCaminhao int,
constraint fkCaminhaoSensor foreign key (fkCaminhao) references caminhao(idCaminhao)
);

SELECT*FROM sensor;

INSERT INTO sensor values (default,'LM35', 3),(default,'LM35', 4),(default,'LM35', 5);

create table dadosMedidos (
idDadosMedidos int,
fkSensor int,
constraint pkSensorDados primary key (fkSensor, idDadosMedidos),
temperatura varchar (6),
dtDadosMedidas datetime  default current_timestamp,
fkProduto int,
constraint fkDadosProduto foreign key (fkProduto) references produto(idProduto)
);



INSERT INTO dadosMedidos values (1,1, '-16.50', default,3);

INSERT INTO dadosMedidos values (2,2, '-16.50', default,4),(3,3, '-16.50', default,5);

select*from dadosMedidos;

create table produto (
idProduto int auto_increment primary key,
nomeProduto varchar(45),
qtdProduto varchar (45),
fkCaminhao int,
constraint fkProdutoCaminhao foreign key (fkCaminhao) references caminhao(idCaminhao)
);


INSERT INTO produto values (default,'Picanha', '250', 3),(default,'Patinho', '50', 4),(default,'Acem', '100', 5);


select*from produto;

show tables;

Select
    Caminhao.idCaminhao,
    DadosMedidos.dtDadosMedidas,
    DadosMedidos.temperatura,
    Produto.nomeProduto
    from Caminhao
    join Produto
    on idCaminhao = fkCaminhao
    inner join DadosMedidos
    on DadosMedidos.fkProduto = Produto.idProduto
    inner join Empresa
    on Caminhao.fkEmpresa = empresa.id  where id =1
    group by fkEmpresa, Caminhao.idCaminhao, DadosMedidos.dtDadosMedidas,Produto.nomeProduto, DadosMedidos.temperatura;
    
    