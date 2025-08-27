import React, { useState } from 'react';
import './index.scss';
import axios from 'axios';

const Admin = () => {
  const [cad, setCad] = useState('');
  const [infoNome, setInfoNome] = useState([]);
  const [erro, setErro] = useState('');

  async function buscarCad() {
    try {
      setErro('');
      let url = 'http://localhost:5010/consultar?nome=' + cad;

      let resposta = await axios.get(url);
      let dados = resposta.data;

     
      let cadEncontrados = dados.registros || [];
      setInfoNome(cadEncontrados);

      if (cadEncontrados.length === 0) {
        setErro('Nenhum usuário encontrado.');
      }

    } catch (err) {
      console.error(err);
      setErro('Erro ao buscar usuários.');
    }
  }

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

        <div className='top-get'>
          <div className='form-group'>
            <label> <h3>Pesquisar usuário</h3> </label>
            <input
              type="text"
              name='usuário'
              placeholder='Pesquisar'
              value={cad}
              onChange={e => setCad(e.target.value)}
            />
            <button onClick={buscarCad} type='button'>Buscar</button>
          </div>

          <h3 id='cads'>Usuários Cadastrados</h3>

          {erro && <p style={{ color: "red" }}>{erro}</p>}

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Escolaridade</th>
                <th>Interesse</th>
                <th>Previsão de Chegada</th>
                <th>Email</th>
                <th>Como Soube da Feira</th>
                <th>Telefone</th>
                <th>É Ex Aluno</th>
                <th>CPF</th>
              </tr>
            </thead>

            <tbody>
              {infoNome.map(item =>
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.escolaridade}</td>
                  <td>{item.interesse}</td>
                  <td>{item.previsao_chegada}</td>
                  <td>{item.email}</td>
                  <td>{item.sabendo_feira}</td>
                  <td>{item.telefone}</td>
                  <td>{item.ex_aluno === 1 ? "Sim" : "Não"}</td>
                  <td>{item.cpf}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
