var database = require("../database/config");

function buscarUltimasMedidas(fkSensor, limite_linhas) {
    var instrucaoSql = `SELECT 
                            temperatura, 
                            DATE_FORMAT(dtDadosMedidas, '%H:%i:%s') as momento_grafico
                        FROM dadosMedidos
                        WHERE fkSensor = ${fkSensor}
                        ORDER BY idDadosMedidos DESC LIMIT ${limite_linhas}`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkSensor) {
    var instrucaoSql = `SELECT 
                            temperatura, 
                            DATE_FORMAT(dtDadosMedidas, '%H:%i:%s') as momento_grafico
                        FROM dadosMedidos
                        WHERE fkSensor = ${fkSensor}
                        ORDER BY idDadosMedidos DESC LIMIT 1`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
};
