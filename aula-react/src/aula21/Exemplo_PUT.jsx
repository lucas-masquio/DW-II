import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditarUsuario({ usuarioParaEditar, onUsuarioAtualizado }) { // Recebe o usuário e um callback
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (usuarioParaEditar) {
      setId(usuarioParaEditar.id);
      setNome(usuarioParaEditar.nome);
      setEmail(usuarioParaEditar.email);
    }
  }, [usuarioParaEditar]); // Atualiza o formulário se o usuário para editar mudar

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      setStatus('Selecione um usuário para editar.');
      return;
    }
    setStatus('Atualizando...');
    try {
      const response = await axios.put(`http://localhost:3001/usuarios/${id}`, { // Requisição PUT
        nome: nome, // Envie todos os campos que definem o recurso completo
        email: email
      });
      console.log('Usuário atualizado:', response.data);
      setStatus('Usuário atualizado com sucesso!');
      if (onUsuarioAtualizado) {
        onUsuarioAtualizado(); // Notifica o componente pai
      }
    } catch (err) {
      setStatus('Erro ao atualizar usuário.');
      console.error('Erro PUT:', err);
    }
  };

  return (
    <div>
      <h2>Editar Usuário (PUT)</h2>
      <form onSubmit={handleSubmit}>
        <p>ID do Usuário a Editar: {id || 'Nenhum selecionado'}</p>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          disabled={!id} // Desabilita se não houver ID para editar
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={!id}
        />
        <button type="submit" disabled={!id}>Atualizar</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default EditarUsuario;