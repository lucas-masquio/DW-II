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
    <div className="max-w-2xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Lista de Usuários</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="bg-gray-100 p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-blue-600">{user.email}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => onEdit(user)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                Editar
              </button>
              <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
