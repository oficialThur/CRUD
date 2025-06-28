import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const API_URL = 'http://localhost:5055/api/User'; 

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = async (user) => {
    try {
      if (user.id) {
        await axios.put(`${API_URL}/${user.id}`, user);
      } else {
        await axios.post(API_URL, user);
      }
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error.response ? error.response.data : error.message);
      console.error('Full error object:', error);
    }
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();  
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <Header />
        <div className="container">
          {/* Passamos os dados e as funções para os componentes filhos via props */}
          <UserForm
            currentUser={editingUser}
            onSave={handleSave}
            onCancel={handleCancel}
          />
          <UserList
            users={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>    
    </>
  );
}

export default App;
