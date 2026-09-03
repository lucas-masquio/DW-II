import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <p>Olá, {nome}!</p>
    </div>
  );
}