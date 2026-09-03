import React, { useState } from 'react';
import UserForm from './components/UserForms';
import UserList from './components/UserList';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateList, setUpdateList] = useState(false);

  return (
    <div className="App">
      <div className="min-h-screen bg-green-300 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Gerenciador de Usuários</h1>
        <UserForm selectedUser={selectedUser} onSave={() => setUpdateList(!updateList)} />
        <UserList onEdit={setSelectedUser} key={updateList} />
      </div>
    </div>
    
  );
};

export default App;