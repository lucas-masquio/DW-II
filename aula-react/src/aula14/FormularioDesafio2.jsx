import { useState } from "react";
import { enviarDados } from "./apiFake";

export default function FormularioDesafio2() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Verifica se os campos foram preenchidos
    if (!nome || !idade) {
      setMensagem("⚠️ Por favor, preencha todos os campos.");
      return;
    }

    try {
      const resposta = await enviarDados({ nome, idade });
      setMensagem(`✅ ${resposta.mensagem}`);
      // Limpa os campos e foca no primeiro
      setNome("");
      setIdade("");
      document.getElementById("nome").focus();
    } catch (error) {
      setMensagem("❌ Ocorreu um erro ao enviar os dados.");
    }
  }

  return (
    <div>
      <h2>Cadastro de Aluno</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
