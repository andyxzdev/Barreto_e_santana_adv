import { validationResult } from "express-validator";
import { enviarEmailContato } from "../service/email.service.js";

export async function receberContato(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Erro de validação:", errors.array());
    return res.status(400).json(errors.array());
  }

  try {
    console.log("Contato recebido:", req.body);

    await enviarEmailContato(req.body);

    return res.status(200).json("Mensagem enviada com sucesso");
  } catch (error) {
    console.error(error);
    return res.status(500).json(error.message);
  }
}
