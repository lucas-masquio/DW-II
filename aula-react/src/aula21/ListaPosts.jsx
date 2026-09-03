// src/components/ListaPosts.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Necessário ter o Axios instalado: npm install axios

function ListaPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento
  const [error, setError] = useState(null);   // Estado para indicar erro na requisição

  useEffect(() => {
    // Ao montar o componente, define loading como true e limpa erros anteriores
    setLoading(true);
    setError(null);

    // Faz a requisição GET para a API do JSON Server
    axios.get('http://localhost:3001/posts')
      .then(response => {
        // Se a requisição for bem-sucedida, atualiza o estado 'posts'
        setPosts(response.data);
        setLoading(false); // Finaliza o carregamento
      })
      .catch(err => {
        // Se houver um erro, define a mensagem de erro e finaliza o carregamento
        setError('Não foi possível carregar os posts. Verifique se o JSON Server está rodando.');
        setLoading(false);
        console.error("Erro ao buscar posts:", err); // Loga o erro no console para depuração
      });
  }, []); // O array de dependências vazio garante que o useEffect rode apenas uma vez (ao montar o componente)

  // Renderização condicional baseada nos estados de loading e error
  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-2xl text-blue-600 font-semibold">Carregando posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center bg-red-100 border border-red-400 text-red-700 rounded relative min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">
        Nossos Posts
      </h1>

      {/* Exibição condicional caso não haja posts */}
      {posts.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Nenhum post disponível.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map(post => (
            <li
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.nome}</h2>
                <p className="text-green-600 text-2xl font-semibold mb-2">
                  R$ {post.preco ? post.preco.toFixed(2).replace('.', ',') : 'N/A'}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Categoria:</span> {post.categoria || 'N/A'}
                </p>
              </div>
              {/* Opcional: Adicionar botão de "Adicionar ao Carrinho" ou detalhes */}
            </li>
          ))}
        </ul>
      )}

      {/* Opcional para os mais rápidos: Formulário simples de POST */}
      {<div className="mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Adicionar Novo Post (Opcional)</h2>
        <form onSubmit={async (e) => {
          e.preventDefault();
          const newPostName = e.target.elements.postName.value;
          if (!newPostName) return;
          try {
            const response = await axios.post('http://localhost:3001/posts', {
              nome: newPostName,
              preco: 0, // Preço default
              categoria: "Outros" // Categoria default
            });
            setPosts([...posts, response.data]); // Adiciona o novo post à lista
            e.target.elements.postName.value = ''; // Limpa o input
          } catch (err) {
            console.error("Erro ao adicionar post:", err);
            alert("Erro ao adicionar post.");
          }
        }}>
          <input
            type="text"
            name="postName"
            placeholder="Nome do novo post"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Adicionar Post
          </button>
        </form>
      </div>
      }
    </div>
  );
}

export default ListaPosts;