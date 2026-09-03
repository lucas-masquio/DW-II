import { useRef } from "react";

export default function Atividade4() {
  const inputRef = useRef();

  function focarInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Digite algo..." />
      <button onClick={focarInput}>Focar input</button>
    </div>
  );
}
