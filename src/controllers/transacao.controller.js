const transacaoService = require("../services/transacao.service");

const create = async (req, res) => {
  const { descricao, data, tipo, valor, status } = req.body;

  if (!descricao || !data || !tipo || !valor || !status) {
    res
      .status(400)
      .send({ message: "Preencha todos os campos para registrar." });
  }

  const transacao = await transacaoService.create(req.body);

  if (!transacao) {
    return res.status(400).send({ message: "Erro na criação da transação!" });
  }

  res.status(201).send({
    message: "Dado criado com sucesso!",
    informacao: {
      id: transacao._id,
      descricao,
      data,
      tipo,
      valor,
      status,
    },
  });
};

module.exports = { create };