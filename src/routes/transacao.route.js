const route = require("express").Router();
const transacaoController = require("../controllers/transacao.controller");

route.post("/", transacaoController.create);

module.exports = route;