import React, { useState, useEffect } from 'react';

export default function Lista() {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para controlar erros

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao carregar usuários');
        }
        return response.json();
      })
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
        console.error('Erro ao buscar usuários:', err);
      });
  }, []);

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.name.toLowerCase().includes(busca.toLowerCase())
  );

  const contadorNomesLongos = usuariosFiltrados.reduce((total, usuario) => {
    return usuario.name.length > 5 ? total + 1 : total;
  }, 0);

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">Lista de Usuários</h1>

      <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Buscar usuário por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg"
        />
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Nomes com mais de 5 letras na lista atual:</span>{' '}
          <span className="text-blue-600 font-bold">{contadorNomesLongos}</span>
        </p>
      </div>

      {loading && (
        <p className="text-center text-xl text-gray-600 mt-8">Carregando usuários...</p>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-8" role="alert">
          <strong className="font-bold">Erro:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {!loading && !error && usuariosFiltrados.length === 0 && (
        <p className="text-center text-xl text-gray-600 mt-8">Nenhum usuário encontrado.</p>
      )}

      {!loading && !error && usuariosFiltrados.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usuariosFiltrados.map(usuario => (
            <li
              key={usuario.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">{usuario.name}</h2>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold">Email:</span> {usuario.email}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Cidade:</span> {usuario.address.city}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}