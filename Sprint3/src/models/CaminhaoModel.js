var database = require("../database/config")

function cadastrarCaminhao(motorista, placa, idUsuario) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Caminhao (motorista, placaCaminhao, fkEmpresa) VALUES ('${motorista}', '${placa}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCaminhoes(idUsuario) {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n buscarCaminhoes(): ")
    var instrucaoSql = `
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
    ON caminhao.fkEmpresa = empresa.id where id=${idUsuario}
GROUP BY 
    caminhao.fkEmpresa, 
    caminhao.idCaminhao, 
    dadosMedidos.dtDadosMedidas,
    produto.nomeProduto, 
    dadosMedidos.temperatura;
   `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    cadastrarCaminhao,
    buscarCaminhoes
};