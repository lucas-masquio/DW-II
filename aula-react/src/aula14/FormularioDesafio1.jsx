import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = () => {
    setMensagem(`Olá, ${nome}. Você tem ${idade} anos.`);
    setNome("");
    setIdade("");
  };

  const camposValidos = nome.trim() !== "" && idade.trim() !== "";

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={!camposValidos}>
        Enviar
      </button>
      <p>{mensagem}</p>
    </div>
  );
}
