var database = require("../database/config")

function cadastrarCaminhao(motorista, placa, produto,QtdProduto, idUsuario) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO caminhao (motorista, placaCaminhao, nomeProduto,qtdProduto, fkEmpresa) VALUES ('${motorista}', '${placa}','${produto}',${QtdProduto}, '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCaminhoes(idUsuario) {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n buscarCaminhoes(): ")
    var instrucaoSql = `
    
SELECT
    caminhao.idCaminhao,        
    caminhao.motorista,
    DATE(dadosMedidos.dtDadosMedidas) AS dtDadosMedidas,
    TRUNCATE(AVG(dadosMedidos.temperatura), 2) AS temperatura,
    caminhao.nomeProduto
FROM caminhao
JOIN dadosMedidos
    ON dadosMedidos.fkCaminhao = caminhao.idCaminhao
INNER JOIN empresa
    ON caminhao.fkEmpresa = empresa.id 
WHERE caminhao.fkEmpresa =${idUsuario}
GROUP BY 
    caminhao.idCaminhao, 
    caminhao.motorista,
    DATE(dadosMedidos.dtDadosMedidas),
    caminhao.nomeProduto,
    dadosMedidos.temperatura
ORDER BY 
dadosMedidos.temperatura;
   `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    cadastrarCaminhao,
    buscarCaminhoes
};