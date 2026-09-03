import { useState, useEffect } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Componente montado!');
  }, []);

  useEffect(() => {
    console.log(`Contador atualizado para: ${contador}`);
  }, [contador]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}