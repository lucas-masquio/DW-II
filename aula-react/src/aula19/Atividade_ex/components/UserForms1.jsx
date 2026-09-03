import React, { useState, useEffect } from 'react';
import api from '../services/api';

const UserForm = ({ selectedUser, onSave }) => {
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) setForm(selectedUser);
  }, [selectedUser]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (form.id) {
      await api.put(`/users/${form.id}`, form);
      alert("Usuário atualizado (simulado).");
    } else {
      await api.post('/users', form);
      alert("Usuário criado (simulado).");
    }

    setForm({ name: '', email: '' });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">{form.id ? 'Editar' : 'Cadastrar'} Usuário</h2>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Salvar
      </button>
    </form>
  );
};

export default UserForm;
