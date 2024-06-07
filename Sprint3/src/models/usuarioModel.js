var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL: autenticar\nEmail:", email, "\nSenha:", senha);
    
    var instrucaoSql = `
        SELECT id, nome, email FROM empresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql, [email, senha]);
}
function autenticarN3(email, senha) {
    // console.log("ACESSEI O USUARIO MODEL: autenticarN3\nEmail:", email, "\nSenha:", senha);
    
    var instrucaoSql = `
        SELECT id, nome, email FROM empresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return data
}

function cadastrar(nome_empresaVar, cnpj_empresaVar, email_empresaVar, primeira_senhaVar) {
    console.log("ACESSEI O USUARIO MODEL: cadastrar\nNome da Empresa:", nome_empresaVar, "\nCNPJ:", cnpj_empresaVar, "\nEmail:", email_empresaVar, "\nSenha:", primeira_senhaVar);
    
    var instrucaoSql = `
        INSERT INTO empresa (nome, cnpj, email, senha) VALUES ('${nome_empresaVar}', '${cnpj_empresaVar}', '${email_empresaVar}', '${primeira_senhaVar}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql, [nome_empresaVar, cnpj_empresaVar, email_empresaVar, primeira_senhaVar]);
}


function redefinir(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function redefinir():", email, senha);

    var instrucaoSql = `UPDATE empresa SET senha = '${senha}' WHERE email = '${email}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    redefinir,
    autenticarN3,
    cadastrar
};
