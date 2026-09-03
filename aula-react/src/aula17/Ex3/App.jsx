import { useState } from 'react';
import Irmao1 from './Irmao1';
import Irmao2 from './Irmao2';

function App() {
  const [mensagem, setMensagem] = useState('');

  return (
    <div>
      <h1>Exemplo: Comunicação entre Irmãos</h1>
      <Irmao1 enviarMensagem={setMensagem} />
      <Irmao2 mensagem={mensagem} />
    </div>
  );
}

export default App;
