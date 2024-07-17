const route = require("express").Router();
const transacaoController = require("../controllers/transacao.controller");
const { validId, validTransacao } = require("../middlewares/global_middleware");

route.post("/", transacaoController.createTransacao);
route.get("/", transacaoController.findAllTransacoes);
route.get("/:id", validId, validTransacao, transacaoController.findTransacaoById);
route.patch("/:id", validId, validTransacao, transacaoController.updateTransacao);
route.delete("/:id", validId, validTransacao, transacaoController.deleteTransacao);

module.exports = route;
