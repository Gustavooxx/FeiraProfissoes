import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        CPF: '',
        telefone: '',
        data_nascimento: '',
        endereco: '',
        cep: ''
    })

    const [errors, setErrors] = useState({
        senha: '',
        CPF: '',
        telefone: '',
        cep: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        let newErrors = { ...errors }

        // Remove special characters for counting
        const cleanValue = value.replace(/[^0-9]/g, '')

        switch(name) {
            case 'senha':
                if (value.length > 20) {
                    newErrors.senha = 'A senha deve ter no máximo 20 caracteres'
                } else {
                    newErrors.senha = ''
                }
                break
            case 'CPF':
                if (cleanValue.length > 11) {
                    newErrors.CPF = 'O CPF deve ter no máximo 11 dígitos'
                } else {
                    newErrors.CPF = ''
                }
                break
            case 'telefone':
                if (cleanValue.length > 11) {
                    newErrors.telefone = 'O telefone deve ter no máximo 11 dígitos'
                } else {
                    newErrors.telefone = ''
                }
                break
            case 'cep':
                if (cleanValue.length > 8) {
                    newErrors.cep = 'O CEP deve ter no máximo 8 dígitos'
                } else {
                    newErrors.cep = ''
                }
                break
        }

        setErrors(newErrors)
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Validate all fields before submission
        let newErrors = {}
        
        if (formData.senha.length > 20) {
            newErrors.senha = 'A senha deve ter no máximo 20 caracteres'
        }
        
        const cleanCPF = formData.CPF.replace(/[^0-9]/g, '')
        if (cleanCPF.length > 11) {
            newErrors.CPF = 'O CPF deve ter no máximo 11 dígitos'
        }
        
        const cleanTelefone = formData.telefone.replace(/[^0-9]/g, '')
        if (cleanTelefone.length > 11) {
            newErrors.telefone = 'O telefone deve ter no máximo 11 dígitos'
        }
        
        const cleanCEP = formData.cep.replace(/[^0-9]/g, '')
        if (cleanCEP.length > 8) {
            newErrors.cep = 'O CEP deve ter no máximo 8 dígitos'
        }

        setErrors(newErrors)
        
        if (Object.keys(newErrors).length === 0) {
            // Form is valid, proceed with submission
            console.log('Form submitted:', formData)
        }
    }

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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Senha *</label>
                        <input 
                            type="password" 
                            name="senha" 
                            placeholder="Digite sua senha" 
                            required 
                            maxLength={20}
                            value={formData.senha}
                            onChange={handleInputChange}
                        />
                        {errors.senha && <span className="error-message">{errors.senha}</span>}
                    </div>

                    <div className="form-group">
                        <label>CPF *</label>
                        <input 
                            type='text' 
                            name="CPF" 
                            placeholder="000.000.000-00" 
                            required
                            maxLength={14}
                            value={formData.CPF}
                            onChange={handleInputChange}
                        />
                        {errors.CPF && <span className="error-message">{errors.CPF}</span>}
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
                            onChange={handleInputChange}
                        />
                        {errors.telefone && <span className="error-message">{errors.telefone}</span>}
                    </div>

                    <div className="form-group">
                        <label>Data de Nascimento *</label>
                        <input 
                            type="date" 
                            name="data_nascimento" 
                            required 
                            value={formData.data_nascimento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Endereço Completo *</label>
                        <input 
                            type="text" 
                            name="endereco" 
                            placeholder="Rua, número, bairro, cidade - UF" 
                            required 
                            value={formData.endereco}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>CEP *</label>
                        <input 
                            type="text" 
                            name="cep" 
                            placeholder="00000-000" 
                            required 
                            maxLength={9}
                            value={formData.cep}
                            onChange={handleInputChange}
                        />
                        {errors.cep && <span className="error-message">{errors.cep}</span>}
                    </div>

                    <button type='submit'>Cadastrar</button>

                </form>
            </div>
        </div>
    )
}
