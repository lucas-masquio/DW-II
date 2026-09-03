import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de ter o Axios instalado

function ListaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get('http://localhost:3001/usuarios') // Requisição GET para listar usuários
      .then(response => {
        setUsuarios(response.data); // Os dados da resposta Axios vêm em 'response.data'
        setLoading(false);
      })
      .catch(err => {
        setError("Erro ao carregar usuários.");
        setLoading(false);
        console.error('Erro GET:', err);
      });
  }, []); // O array vazio garante que a requisição ocorra apenas uma vez ao montar

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Usuários Cadastrados (GET)</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            {usuario.nome} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeUsuarios;