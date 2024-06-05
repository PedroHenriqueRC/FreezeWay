var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL: autenticar\nEmail:", email, "\nSenha:", senha);
    
    var instrucaoSql = `
        SELECT id, nome, email FROM empresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql, [email, senha]);
}

function cadastrar(nome_empresaVar, cnpj_empresaVar, email_empresaVar, primeira_senhaVar) {
    console.log("ACESSEI O USUARIO MODEL: cadastrar\nNome da Empresa:", nome_empresaVar, "\nCNPJ:", cnpj_empresaVar, "\nEmail:", email_empresaVar, "\nSenha:", primeira_senhaVar);
    
    var instrucaoSql = `
<<<<<<< HEAD
        INSERT INTO empresa (nome, cnpj, email, senha) VALUES ('${nome_empresaVar}', ${cnpj_empresaVar}, '${email_empresaVar}', '${primeira_senhaVar}');
=======
        INSERT INTO empresa (nome, cnpj, email, senha) VALUES ('${nome_empresaVar}', '${cnpj_empresaVar}', '${email_empresaVar}', '${primeira_senhaVar}');
>>>>>>> 21cff37b6325b495b8882b3095e862e31578b07a
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql, [nome_empresaVar, cnpj_empresaVar, email_empresaVar, primeira_senhaVar]);
}

module.exports = {
    autenticar,
    cadastrar
};
