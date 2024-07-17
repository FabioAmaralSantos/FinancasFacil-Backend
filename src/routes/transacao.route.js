const route = require("express").Router();
const transacaoController = require("../controllers/transacao.controller");
const { validId, validTransacao } = require("../middlewares/global_middleware");

route.post("/", transacaoController.create);
route.get("/", transacaoController.findAll);
route.get("/:id", validId, validTransacao, transacaoController.findById);
route.patch("/:id", validId, validTransacao, transacaoController.update);

module.exports = route;
