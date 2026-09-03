import { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px;
  margin: 5px;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: black;
}
`;

const Button = styled.button`
  padding: 10px;
  background-color: teal;
  color: white;
  Cursor: pointer;
  &:hover {
    background-color: darkviolet;
}
`;

function MiniFormulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome || !email.includes('@')) {
      setErro('Preencha todos os campos corretamente!');
    } else {
      setErro('');
      alert(`Dados enviados: ${nome} - ${email}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Enviar</Button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </form>
  );
}

export default MiniFormulario;
