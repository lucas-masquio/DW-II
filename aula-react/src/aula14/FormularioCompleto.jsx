import { useState } from "react";

export default function FormularioCompleto() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [mensagem, setMensagem] = useState("");

  function exibirMensagem(e) {
    e.preventDefault(); // evita reload da página
    if (!nome || !idade || !cidade) {
      setMensagem("⚠️ Por favor, preencha todos os campos!");
    } else {
      setMensagem(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Formulário Completo</h2>
      <form onSubmit={exibirMensagem}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginBottom: "10px", display: "block", padding: "8px" }}
        />
        <input
          type="number"
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          style={{ marginBottom: "10px", display: "block", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Digite sua cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          style={{ marginBottom: "10px", display: "block", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>Enviar</button>
      </form>
      <p style={{ marginTop: "15px", fontWeight: "bold" }}>{mensagem}</p>
    </div>
  );
}
