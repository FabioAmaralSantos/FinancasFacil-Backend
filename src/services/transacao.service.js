const transacao = require("../models/transacao-model");

const create = (body) => transacao.create(body);
const findAll = () => transacao.find(); // Função do mongoose para buscar todos os dados.
const findById = (id) => transacao.findById(id); // Função do mongoose para buscar um dado especifico pelo ID.
const update = (id, descricao, data, tipo, valor, status) =>
  transacao.findOneAndUpdate(
    { _id: id },
    { descricao, data, tipo, valor, status }
  ); // Função do mongoose para atualizar uma informação de um input através do ID.

module.exports = {
  create,
  findAll,
  findById,
  update,
};
