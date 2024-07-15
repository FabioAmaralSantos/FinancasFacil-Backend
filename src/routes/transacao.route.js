const route = require("express").Router();
const transacaoController = require("../controllers/transacao.controller");

route.post("/", transacaoController.create);
route.get("/", transacaoController.findAll);
route.get("/:id", transacaoController.findById);

module.exports = route;