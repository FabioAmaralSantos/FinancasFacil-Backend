const transacaoService = require("../services/transacao.service");
const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const id = req.params.id;

  // Método do Mongoose para verificar se um ID é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID Inválido." });
  }

  next();
};

const validTransacao = async (req, res, next) => {
  const id = req.params.id;

  const transacao = await transacaoService.findTransacaoById(id);

  if (!transacao) {
    return res.status(400).send({ message: "Transação não encontrada." });
  }

  req.id = id;
  req.transacao = transacao;

  next();
};

module.exports = { validId, validTransacao };
