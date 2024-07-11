//MODELO DE CONFIGURAÇÃO DOS DADOS DO BANCO DE DADOS

const mongoose = require("mongoose");

const transacaoSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const transacaoModel = mongoose.model("transacao", transacaoSchema);

module.exports = transacaoModel;
