import React, { useState } from 'react';
import axios from 'axios';

function AdicionarUsuario({ onUsuarioAdicionado }) { // Recebe um callback para notificar
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    setStatus('Adicionando...');
    try {
      const response = await axios.post('http://localhost:3001/usuarios', { // Requisição POST
        nome: nome,
        email: email
      });
      console.log('Usuário adicionado:', response.data);
      setStatus('Usuário adicionado com sucesso!');
      setNome('');
      setEmail('');
      if (onUsuarioAdicionado) {
        onUsuarioAdicionado(); // Notifica o componente pai para recarregar a lista, por exemplo
      }
    } catch (err) {
      setStatus('Erro ao adicionar usuário.');
      console.error('Erro POST:', err);
    }
  };

  return (
    <div>
      <h2>Adicionar Novo Usuário (POST)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default AdicionarUsuario;