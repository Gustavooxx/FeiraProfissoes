import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Conta() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [mensagem, setMensagem] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let url = 'http://localhost:3000/cadastro'; 
    try {
      const resposta = await axios.post(url, formData);
      console.log("Resposta da API:", resposta.data);
      setFormData({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error("Erro fazer login:", error);
      setMensagem('Erro ao realizar login. Tente novamente.');
    }
  }

  return (
    <div className="Conta">
      <section>
        <form onSubmit={handleSubmit}>
          <div className='inputBox'>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='inputBox'>
            <label>Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Entrar</button>
          {mensagem && <p className="mensagem">{mensagem}</p>}
          <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link></p>
        </form>
      </section>
    </div>
  )
}
