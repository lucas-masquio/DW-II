import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  function exibirMensagem() {
    if (nome.trim() === "" || idade.trim() === "") {
      setMensagem("⚠️ Por favor, preencha todos os campos.");
    } else {
      setMensagem(`✅ Olá ${nome}, você tem ${idade} anos.`);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      exibirMensagem();
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <input
        type="number"
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={exibirMensagem}>Enviar</button>
      <p>{mensagem}</p>
    </div>
  );
}
