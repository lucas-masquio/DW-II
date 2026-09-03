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
    onSave(); // Atualiza lista
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{form.id ? 'Editar' : 'Cadastrar'} Usuário</h2>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default UserForm;
