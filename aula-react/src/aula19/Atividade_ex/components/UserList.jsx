import React, { useEffect, useState } from 'react';
import api from '../services/api';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await api.get('/users');
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`);
    alert("Usuário excluído (simulado).");
    setUsers(users.filter(user => user.id !== id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) 
            <button onClick={() => onEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
