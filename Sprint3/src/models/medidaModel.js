var database = require("../database/config");

function buscarUltimasMedidas(Id_usuario,limite_linhas) {
    var instrucaoSql = `SELECT empresa.id, dadosMedidos.temperatura, 
    DATE_FORMAT(dadosMedidos.dtDadosMedidas, '%H:%i:%s') as momento_grafico
    FROM dadosMedidos JOIN empresa 
    WHERE dadosMedidos.fkSensor = 1 and empresa.id = ${Id_usuario}
    ORDER BY idDadosMedidos DESC LIMIT ${limite_linhas};`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {
    var instrucaoSql = `SELECT empresa.id, dadosMedidos.temperatura, 
    DATE_FORMAT(dadosMedidos.dtDadosMedidas, '%H:%i:%s') as momento_grafico
    FROM dadosMedidos JOIN empresa 
    WHERE dadosMedidos.fkSensor = 1 and empresa.id = ${Id_usuario}
    ORDER BY idDadosMedidos DESC LIMIT  1;`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
};
