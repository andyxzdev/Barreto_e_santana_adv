import "dotenv/config";

import express from "express";
import cors from "cors";

import { contatoValidation } from "./validation/contato.validation.js";
import { receberContato } from "./controller/contatoController.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
  }),
);

app.use(express.json());

app.post("/api/contato", contatoValidation, receberContato);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
