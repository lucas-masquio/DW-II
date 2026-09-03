import { useMemo, useState, useEffect } from "react";
function calculaDobroLento(numero) {
  console.log("Calculando...");
  let total = 0;
  for (let i = 0; i < 1e3; i++) {
    total += numero * 2;
  }
  return total;
}
export default function Atividade5() {
  const [numero, setNumero] = useState(1);
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const resultado = useMemo(() => calculaDobroLento(numero), [numero]);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);
  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <p>Resultado (dobro): {resultado}</p>
      <p>Hora atual: {hora}</p>
    </div>
  );
}
