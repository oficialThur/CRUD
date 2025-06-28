import UserItem from "./UserItem";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Lista de Usuários</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-blue-600 text-white text-left text-sm font-medium rounded-tl-lg">Nome</th>
              <th className="py-3 px-4 bg-blue-600 text-white text-left text-sm font-medium">Email</th>
              <th className="py-3 px-4 bg-blue-600 text-white text-left text-sm font-medium">Emprego</th>
              <th className="py-3 px-4 bg-blue-600 text-white text-left text-sm font-medium">Nível</th>
              <th className="py-3 px-4 bg-blue-600 text-white text-left text-sm font-medium">Linguagem</th>
              <th className="py-3 px-4 bg-blue-600 text-white text-left text-sm font-medium rounded-tr-lg">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserItem 
                key={user.id} 
                user={user} 
                onEdit={onEdit} 
                onDelete={onDelete} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
