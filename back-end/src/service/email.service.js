import nodemailer from "nodemailer";

// Checagem das variáveis de ambiente, Evita rodar o sistema quebrado.
if (
  !process.env.MAIL_HOST ||
  !process.env.MAIL_PORT ||
  !process.env.MAIL_USER ||
  !process.env.MAIL_PASS
) {
  throw new Error("Variáveis de ambiente de e-mail não carregadas");
}

// o caminhão do correio configurado para sair da garagem.
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function enviarEmailContato(contato) {
  const { nomeCompleto, telefone, email, areaInteresse, mensagem } = contato;

  await transporter.sendMail({
    from: `"Contato Site" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Novo contato de ${nomeCompleto}`,
    text: `
Nome: ${nomeCompleto}
Telefone: ${telefone}
Email: ${email}
Área de interesse: ${areaInteresse}

Mensagem:
${mensagem}
    `,
  });
}
