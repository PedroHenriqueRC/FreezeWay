var CaminhaoModel = require("../models/CaminhaoModel");

function cadastrarCaminhao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var motorista = req.body.motoristaServer;
    var placa = req.body.placaServer;
    var idUsuario = req.body.idUsuarioServer;
    
    // Faça as validações dos valores
    if (motorista == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (placa == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } 
     else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        CaminhaoModel.cadastrarCaminhao(motorista, placa , idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarCaminhoes(req, res) {
    var idEmpresa = req.params.idEmpresa;

    CaminhaoModel.buscarCaminhoes(idEmpresa)
        .then(resultadoAutenticar => {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

            if (resultadoAutenticar.length > 0) {
                res.status(200).json(resultadoAutenticar);
            } else {
                res.status(200).json([]);
            }
        })
        .catch(erro => {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o buscar orçamentos! Erro: ", erro.sqlMessage);
            res.status(500).json({ error: "Houve um erro ao realizar o buscar orçamentos!", details: erro.sqlMessage });
        });
}

module.exports = {
    buscarCaminhoes,
    cadastrarCaminhao
}