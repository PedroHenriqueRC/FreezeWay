var database = require("../database/config")

function cadastrarCaminhao(motorista, placa, idUsuario) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Caminhao (motorista, placa, fkEmpresaCaminhao) VALUES ('${motorista}', '${placa}', '${idUsuario}',);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCaminhoes(idEmpresa) {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n buscarCaminhoes(): ")
    var instrucaoSql = `Select 
    Caminhao.idCaminhao, 
    DadosMedidos.dataDados,
    DadosMedidos.temperatura,
    Produto.nomeProduto
    from Caminhao
    join Produto
    on idCaminhao = fkCaminhao
    inner join DadosMedidos
    on DadosMedidos.fkProduto = Produto.idProduto
    inner join Empresa
    on Caminhao.fkEmpresaCaminhao = empresa.${idEmpresa}
    group by fkEmpresaDados, Caminhao.idCaminhao, DadosMedidos.dataDados,Produto.nomeProduto, DadosMedidos.temperatura;
   `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    cadastrarCaminhao,
    buscarCaminhoes
};