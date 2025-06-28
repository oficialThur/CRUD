const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-4 text-sm text-gray-700">{user.nome}</td>
      <td className="py-3 px-4 text-sm text-gray-700">{user.email}</td>
      <td className="py-3 px-4 text-sm text-gray-700">{user.employment}</td>
      <td className="py-3 px-4 text-sm text-gray-700">{user.level}</td>
      <td className="py-3 px-4 text-sm text-gray-700">{user.primaryLanguage}</td>
      <td className="py-3 px-4 text-sm text-gray-700 flex gap-2">
        <button 
          onClick={() => onEdit(user)} 
          className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition duration-200 text-xs"
        >
          Editar
        </button>
        <button 
          onClick={() => onDelete(user.id)} 
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200 text-xs"
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
