var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email_empresaVar = req.body.emailServer;
    var primeira_senhaVar = req.body.senhaServer;

    if (email_empresaVar === undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (primeira_senhaVar === undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email_empresaVar, primeira_senhaVar)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length === 1) {
                    console.log(resultadoAutenticar);
                    res.json({
                        idUsuario: resultadoAutenticar[0].id,
                        nome: resultadoAutenticar[0].nome,
                        email: resultadoAutenticar[0].email
                    });
                } else if (resultadoAutenticar.length === 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function autenticarN3(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var email = req.body.emailServer;
    var Senha = req.body.senhaServer;

    if (email === undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (Senha === undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else if (idUsuario === undefined) {
        res.status(400).send("Seu ID de usuário está undefined!");
    } else {
        usuarioModel.autenticarN3(idUsuario, email, Senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length === 1) {
                    console.log(resultadoAutenticar);
                    res.json({
                        idUsuario: resultadoAutenticar[0].id,
                        nome: resultadoAutenticar[0].nome,
                        email: resultadoAutenticar[0].email
                    });
                } else if (resultadoAutenticar.length === 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    var nome_empresaVar = req.body.nome_empresaServer;
    var cnpj_empresaVar = req.body.cnpj_empresaServer;
    var email_empresaVar = req.body.email_empresaServer;
    var primeira_senhaVar = req.body.primeira_senhaServer;

    if (nome_empresaVar === undefined) {
        res.status(400).send("Nome da empresa está undefined!");
    } else if (cnpj_empresaVar === undefined) {
        res.status(400).send("CNPJ da empresa está undefined!");
    } else if (email_empresaVar === undefined) {
        res.status(400).send("Email da empresa está undefined!");
    } else if (primeira_senhaVar === undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome_empresaVar, cnpj_empresaVar, email_empresaVar, primeira_senhaVar)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function redefinir(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.redefinir(email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a redefinição! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    autenticar,
    cadastrar,
    redefinir,
    autenticarN3,
    cadastrar
}
