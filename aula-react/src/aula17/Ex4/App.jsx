import { useState } from 'react';
import Pagina from './Pagina';
import TemaContext from './TemaContext';

function App() {
  const [tema, setTema] = useState('claro');

  function alternarTema() {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  }

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      <Pagina />
    </TemaContext.Provider>
  );
}

export default App;

