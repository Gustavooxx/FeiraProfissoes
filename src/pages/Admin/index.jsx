import React, { useState } from 'react';
import './index.scss';

const Admin = () => {
  const [users] = useState([
    { name: 'Ana Souza', email: 'ana@gmaail.com', status: 'Cadastrado' },
    { name: 'Bruno Lima', email: 'bruno@example.com', status: 'Não cadastrado' },
    { name: 'Carla Mendes', email: 'carla@email.com', status: 'Não cadastrado' },
    { name: 'Daniel Nunes', email: 'daniel@example.com', status: 'Cadastrado' },
  ]);

  return (
    <div className="admin">
      <div className="admin__sidebar">
        <h1>Admin</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Usuários</li>
            <li>Expositores</li>
            <li>Configurações</li>
          </ul>
        </nav>
      </div>
      <div className="admin__content">
        <h2>Painel do Admin</h2>
        <h3>Usuários Cadastrados</h3>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className={user.status === 'Cadastrado' ? 'cadastrado' : 'nao-cadastrado'}>
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
