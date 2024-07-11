//MODELO DE CONFIGURAÇÃO DOS DADOS DO BANCO DE DADOS

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
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

const data = mongoose.model("data", dataSchema);

module.exports = data;
