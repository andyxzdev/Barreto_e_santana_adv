import "dotenv/config";

import express from "express";
import cors from "cors";

import { contatoValidation } from "./validation/contato.validation.js";
import { receberContato } from "./controller/contatoController.js";

const app = express();

// o express é quem abre a porta do backend e escuta pedidos/requisições e encaminha para o lugar certo

app.use(
  cors({
    // O cors é quem define quem pode acessar o backend.
    origin: ["http://localhost:5173", "http://localhost:3000"],
  }),
);

app.use(express.json()); // o express aqui permite que o backend entenda JSON.

app.post("/api/contato", contatoValidation, receberContato);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
