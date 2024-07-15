const transacao = require("../models/transacao-model");

const create = (body) => transacao.create(body);
const findAll = () => transacao.find(); // Função do mongoose para buscar todos os dados.
const findById = (id) => transacao.findById(id); // Função do mongoose para buscar um dado especifico pelo ID.

module.exports = {
  create,
  findAll,
  findById,
};
