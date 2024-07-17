const transacao = require("../models/transacao-model");

const createTransacao = (body) => transacao.create(body);
const findAllTransacoes = () => transacao.find(); // Função do mongoose para buscar todos os dados.
const findTransacaoById = (id) => transacao.findById(id); // Função do mongoose para buscar um dado especifico pelo ID.
const updateTransacao = (id, descricao, data, tipo, valor, status) =>
  transacao.findOneAndUpdate(
    { _id: id },
    { descricao, data, tipo, valor, status }
  ); // Função do mongoose para atualizar uma informação de um input através do ID.
const deleteTransacao = (id) => transacao.findOneAndDelete({ _id: id });

module.exports = {
  createTransacao,
  findAllTransacoes,
  findTransacaoById,
  updateTransacao,
  deleteTransacao,
};
