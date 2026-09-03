import { useState, useEffect } from 'react';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Simula um carregamento
    setTimeout(() => {
      setUsuarios([
        { id: 1, nome: 'João' },
        { id: 2, nome: 'Maria' },
        { id: 3, nome: 'Pedro' }
      ]);
      setCarregando(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {carregando ? (
        <p>Carregando usuários...</p>
      ) : (
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}