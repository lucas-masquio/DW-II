import { useEffect, useState } from 'react';
import axios from 'axios';

function ListaPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simula um atraso de 1 segundo antes de fazer a requisição
    const timer = setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setPosts(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Erro ao buscar posts:", error);
          setError("Não foi possível carregar os posts.");
          setLoading(false);
        });
    }, 1000); // Atraso de 1000 milissegundos (1 segundo)

    // Função de limpeza para evitar vazamento de memória caso o componente seja desmontado antes do timeout
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p>Carregando posts...</p>; // Agora você verá isso por 1 segundo
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default ListaPosts;