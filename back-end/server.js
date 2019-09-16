const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o App
const app = express();

//permite que seja enviado dados no formato JSON para a aplicação
app.use(express.json());

//libera acesso para todos os dominios
app.use(cors());

//Conecta com a base de dados
mongoose.connect("mongodb://localhost:27017/cielo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models/");

//Rotas
app.use("/api", require("./src/routes"));

//ouvir porta 3001 do navegador
app.listen(3001);
