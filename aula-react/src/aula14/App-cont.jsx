import { useState } from "react";
import Contador from "./Contador.jsx";
import Formulario from "./Formulario.jsx";

export default function App() {
  const [tela, setTela] = useState("contador");

  return (
    <div>
      <h1>Aula 14 – Estados e Eventos</h1>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setTela("contador")}>Contador</button>
        <button onClick={() => setTela("formulario")}>Formulário</button>
      </div>

      {tela === "contador" && <Contador />}
      {tela === "formulario" && <Formulario />}
    </div>
  );
}
/*Usa useState("contador") para controlar qual componente está ativo.
Os botões alteram o valor de tela (contador ou formulario).
A renderização condicional (&&) exibe o componente selecionado.*/
