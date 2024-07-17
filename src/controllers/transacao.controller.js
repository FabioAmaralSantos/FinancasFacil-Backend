const transacaoService = require("../services/transacao.service");
const mongoose = require("mongoose");
const global_middleware = require("../middlewares/global_middleware");

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
  const transacao = req.transacao;
  res.send(transacao);
};

const update = async (req, res) => {
  const { descricao, data, tipo, valor, status } = req.body;

  if (!descricao && !data && !tipo && !valor && !status) {
    res
      .status(400)
      .send({ message: "Preencha pelo menos 1 campo para atualizar." });
  }

  const { id, transacao } = req;

  await transacaoService.update(id, descricao, data, tipo, valor, status);

  res.send({ message: "Transação foi atualizada com sucesso!" });
};

module.exports = { create, findAll, findById, update };
