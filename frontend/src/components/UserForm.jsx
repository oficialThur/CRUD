import { useState, useEffect } from 'react';

const UserForm = ({ currentUser, onSave, onCancel }) => {
  const [user, setUser] = useState({ nome: '', email: '', employment: '', level: '', primaryLanguage: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser({ nome: '', email: '', employment: '', level: '', primaryLanguage: '' });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{currentUser ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          name="nome" 
          placeholder="Nome" 
          value={user.nome} 
          onChange={handleChange} 
          required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={user.email} 
          onChange={handleChange} 
          required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          name="employment" 
          placeholder="Emprego (Ex: Dev Frontend)" 
          value={user.employment} 
          onChange={handleChange} 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          name="level" 
          placeholder="Nível (Ex: Júnior)" 
          value={user.level} 
          onChange={handleChange} 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          name="primaryLanguage" 
          placeholder="Linguagem (Ex: JavaScript)" 
          value={user.primaryLanguage} 
          onChange={handleChange} 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2">
          <button 
            type="submit" 
            className="flex-1 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {currentUser ? 'Atualizar' : 'Adicionar'}
          </button>
          {currentUser && (
            <button 
              type="button" 
              onClick={onCancel} 
              className="flex-1 bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
