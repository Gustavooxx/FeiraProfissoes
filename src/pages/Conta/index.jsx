import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    
    // Simulação de login - você pode integrar com sua API aqui
    try {
      setMensagem('Login realizado com sucesso!')
      console.log('Dados do login:', formData)
      
      // Limpar formulário após sucesso
      setFormData({
        email: '',
        password: ''
      })
    } catch (error) {
      console.error('Erro no login:', error)
      setMensagem('Erro ao realizar login. Tente novamente.')
    }
  }

  return (
    <div className="Conta">
      <section>
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

        <button type="submit" onClick={handleSubmit}>Entrar</button>
        {mensagem && <p className="mensagem">{mensagem}</p>}
        <p>Não tem uma conta? <Link to="/Login">Cadastre-se</Link></p>
      </section>
    </div>
  )
}