import { useEffect, useState } from "react";

export default function App() {
const [usuarios, setUsuarios] = useState([]);

useEffect(() => {
  async function buscarDados() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    const dados = await resposta.json();
    setUsuarios(dados);
  }

  buscarDados();
}, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}