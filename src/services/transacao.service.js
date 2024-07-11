const transacao = require("../models/transacao-model");

const create = (body) => transacao.create(body);

module.exports = {
  create,
};
