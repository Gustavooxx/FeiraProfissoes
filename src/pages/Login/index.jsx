import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";


export default function Login() {
  const [formData, setFormData] = useState({

    nome: '',
    escolaridade: '',
    interesse: '',
    previsao_chegada: '',
    email: '',
    sabendo_feira: '',
    telefone: '',
    ex_aluno: 0,
    cpf: ''

  });

  const [mensagem, setMensagem] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "ex_aluno" ? Number(value) : value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // evita reload da página

    let url = 'http://localhost:5010/cadastro';
    try {
      const resposta = await axios.post(url, formData);

      setMensagem("Usuário cadastrado com sucesso!");
      console.log("Resposta da API:", resposta.data);

      // limpa o formulário
      setFormData({
        nome: "",
        escolaridade: "",
        interesse: "",
        previsao_chegada: "",
        email: "",
        sabendo_feira: "",
        telefone: "",
        ex_aluno: 0,
        cpf: ""
      });

    } catch (error) {
      console.error("Erro ao cadastrar:", error);

      // verifica se a API retornou um erro específico
      if (error.response && error.response.data && error.response.data.erro) {
        setMensagem(error.response.data.erro); // ex: "CPF já existe no sistema"
      } else {
        setMensagem("Erro ao cadastrar usuário!");
      }
    }
  };


  return (
    <div className='cadastro'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Cadastro de Usuário</h1>

          <div className="form-group">
            <label>Nome Completo *</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome completo"
              required
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>



          <div className='form-group'>
            <label>Previsão de Chegada</label>
            <input
              type="text"
              name='previsao_chegada'
              placeholder='00:00'
              value={formData.previsao_chegada}
              onChange={handleChange}

            />
          </div>


          <div className="form-group">
            <label>CPF *</label>
            <input
              type='text'
              name="cpf"
              placeholder="000.000.000-00"
              required
              maxLength={14}
              value={formData.cpf}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">
            <label>Telefone *</label>
            <input
              type="tel"
              name="telefone"
              placeholder="(00) 00000-0000"
              required
              maxLength={15}
              value={formData.telefone}
              onChange={handleChange}
            />

          </div>

          <div className='form-group'>
            <label >Como soube da Feira? *</label>
            <select id="sabendoFeira" name="sabendo_feira"
              value={formData.sabendo_feira}
              onChange={handleChange}>
              <option value="">Selecione...</option>
              <option value="Insta">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Amigos ou família">Amigos ou família</option>
              <option value="Outros">Outros...</option>
            </select>
          </div>
          <div className='form-group'>
            <label >Interesse *</label>
            <select id="interesse" name="interesse"
              value={formData.interesse}
              onChange={handleChange}>
              <option value="">Selecione...</option>
              <option value="info">Informática</option>
              <option value="CV">Comunicação Visual</option>
              <option value="ADM">Admiministração</option>
              <option value="Mecânica">Eletromecânica</option>
              <option value="Elétrica">Automação Residencial</option>
              <option value="Inglês">Inglês</option>
              <option value="Conhecer">Conhecer o local</option>
            </select>
          </div>

          <div className='form-group'>
            <label>Escolaridade *</label>
            <select id="escolaridade" name="escolaridade"
              value={formData.escolaridade}
              onChange={handleChange}>
              <option value="">Selecione...</option>
              <option value="Fundamental">Ensino Fundamental</option>
              <option value="Médio">Ensino Médio</option>
              <option value="Superior">Ensino Superior</option>
            </select>
          </div>

          <div className='form-group'>
            <label>É ex aluno *</label>
            <select id="exalun" name="ex_aluno"
              value={formData.ex_aluno}
              onChange={handleChange}>
              <option value="">Selecione...</option>
              <option value={0}>Não</option>
              <option value={1}>Sim</option>

            </select>
          </div>

          <button type="submit">Cadastrar</button>
        </form>

        {mensagem && (
          <p
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              color: mensagem.includes("sucesso") ? "green" : "red"
            }}
          >
            {mensagem}
          </p>
        )}

      </div>
    </div>
  )
}

