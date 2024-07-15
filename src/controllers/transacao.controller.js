const transacaoService = require("../services/transacao.service");
const mongoose = require("mongoose");

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

const findAll = async (req, res) => {
  const transacoes = await transacaoService.findAll();

  if (transacoes === 0) {
    return res.status(400).send({ message: "Nada para Mostrar" });
  }

  res.send(transacoes);
};

const findById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    // Método do Mongoose para verificar se um ID é válido
    return res.status(400).send({ message: "ID Inválido." });
  }

  const transacao = await transacaoService.findById(id);

  if (!transacao) {
    return res.status(400).send({ message: "Transação não encontrada." });
  }

  res.send(transacao);
};

const update = async (req, res) => {
  const { descricao, data, tipo, valor, status } = req.body;

  if (!descricao && !data && !tipo && !valor && !status) {
    res
      .status(400)
      .send({ message: "Preencha pelo menos 1 campo para atualizar." });
  }

  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID Inválido." });
  }

  const transacao = await transacaoService.findById(id);

  if (!transacao) {
    return res.status(400).send({ message: "Transação não encontrada." });
  }

  await transacaoService.update(id, descricao, data, tipo, valor, status);

  res.send({ message: "Transação foi atualizada com sucesso!" });
};

module.exports = { create, findAll, findById, update };
