import React, { useState } from "react";
import axios from "axios"; // axios é usado para fazer requisições HTTP, que nesse caso é pro envio do formulario
import "./Forms.scss";

function Forms() {
  const [formData, setFormData] = useState({
    //form data é o estado que guarda os dados do formulário
    //e o setFormData é a função que atualiza esse estado
    nomeCompleto: "",
    telefone: "",
    email: "",
    areaInteresse: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    //e é o evento que ocorre quando o usuário digita algo no formulário
    //handleChange é a função que atualiza o estado do formulário
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    //asyn é usado para fazer requisições assíncronas, ou seja, que não bloqueiam a execução do código
    //handleSubmit é a função que envia os dados do formulário
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/contato", formData); //await é usado para esperar a resposta da requisição antes de continuar a execução do código
      //axios.post é usado para enviar os dados do formulário para o servidor
      alert("Mensagem enviada com sucesso!");
      setFormData({
        nomeCompleto: "",
        telefone: "",
        email: "",
        areaInteresse: "",
        mensagem: "",
      });
    } catch (error) {
      //catch é usado para tratar erros que podem ocorrer durante a requisição
      //se ocorrer um erro, ele será tratado aqui
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="formularioDiv">
      <h1>Solicite atendimento</h1>
      <form onSubmit={handleSubmit} className="formContainer">
        <input
          type="text"
          name="nomeCompleto"
          placeholder="Seu nome completo"
          value={formData.nomeCompleto}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="telefone"
          placeholder="Seu telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="areaInteresse"
          placeholder="Área de interesse (ex: Direito Civil, Direito Penal...)"
          value={formData.areaInteresse}
          onChange={handleChange}
          required
        />

        <textarea
          name="mensagem"
          placeholder="Fale um pouco sobre o que você precisa..."
          value={formData.mensagem}
          onChange={handleChange}
          rows={5}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Forms;
