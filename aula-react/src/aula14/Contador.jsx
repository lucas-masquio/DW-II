import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou <strong>{contador}</strong> vezes.</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}