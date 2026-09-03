import { useState } from 'react';

function FormularioValidacao() {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (nome.trim() === '') {
      setErro('O nome é obrigatório!');
    } else {
      setErro('');
      alert(`Nome enviado: ${nome}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button type="submit">Enviar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </form>
  );
}
 export default FormularioValidacao