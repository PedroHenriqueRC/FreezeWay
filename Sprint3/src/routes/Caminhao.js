var express = require("express");
var router = express.Router();

var CaminhaoController = require("../controllers/CaminhaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarCaminhao", function (req, res) {
    CaminhaoController.cadastrarCaminhao(req, res);
});

router.get("/buscarCaminhoes/:idUsuario", function (req, res) {
    CaminhaoController.buscarCaminhoes(req, res);
});

module.exports = router;