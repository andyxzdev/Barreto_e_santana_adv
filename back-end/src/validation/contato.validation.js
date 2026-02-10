import { body } from "express-validator";

export const contatoValidation = [
  body("nomeCompleto").notEmpty().withMessage("O nome completo é obrigatório"),

  body("telefone").notEmpty().withMessage("O telefone é obrigatório"),

  body("email").isEmail().withMessage("O email deve ser válido"),

  body("areaInteresse")
    .notEmpty()
    .withMessage("A área de interesse é obrigatória"),

  body("mensagem").notEmpty().withMessage("A mensagem é obrigatória"),
];
