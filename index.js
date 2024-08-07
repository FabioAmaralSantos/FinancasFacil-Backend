/* Para que o projeto funcione corretamente, não esquecer de instalar todas as dependências necessárias.
É necessário os NODE_MODULES que foram ignoradas no .GITIGNORE. */

const express = require("express");
const app = express();
const db = require("./src/database/db"); // INSTANCIANDO O BANCO DE DADOS
const transacaoRoute = require("./src/routes/transacao.route");

const port = 3000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}.`));

db(); // EXECUTANDO O CÓDIGO DO BANCO DE DADOS

app.use(express.json());
app.use("/transacao", transacaoRoute);
