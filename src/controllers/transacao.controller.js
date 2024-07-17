const transacaoService = require("../services/transacao.service");

const createTransacao = async (req, res) => {
  const { descricao, data, tipo, valor, status } = req.body;

  if (!descricao || !data || !tipo || !valor || !status) {
    res
      .status(400)
      .send({ message: "Preencha todos os campos para registrar." });
  }

  const transacao = await transacaoService.createTransacao(req.body);

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

const findAllTransacoes = async (req, res) => {
  const transacoes = await transacaoService.findAllTransacoes();

  if (transacoes === 0) {
    return res.status(400).send({ message: "Nada para Mostrar" });
  }

  res.send(transacoes);
};

const findTransacaoById = async (req, res) => {
  const transacao = req.transacao;
  res.send(transacao);
};

const updateTransacao = async (req, res) => {
  const { descricao, data, tipo, valor, status } = req.body;

  if (!descricao && !data && !tipo && !valor && !status) {
    res
      .status(400)
      .send({ message: "Preencha pelo menos 1 campo para atualizar." });
  }

  const { id, transacao } = req;

  await transacaoService.updateTransacao(
    id,
    descricao,
    data,
    tipo,
    valor,
    status
  );

  res.send({ message: "Transação foi atualizada com sucesso!" });
};

const deleteTransacao = async (req, res) => {
  const id = req.id;

  await transacaoService.deleteTransacao(id);

  res.send({ message: "Transação deletada com sucesso!" });
};

module.exports = {
  createTransacao,
  findAllTransacoes,
  findTransacaoById,
  updateTransacao,
  deleteTransacao,
};
