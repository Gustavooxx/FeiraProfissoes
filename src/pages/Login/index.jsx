import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        CPF: '',
        telefone: '',
        Chegada: ''

    })

    const [errors, setErrors] = useState({
        CPF: '',
        telefone: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        let newErrors = { ...errors }

        // Remove special characters for counting
        const cleanValue = value.replace(/[^0-9]/g, '')

        switch (name) {

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
                case 'Chegada':
                if (cleanValue.length > 4) {
                    newErrors.Chegada = 'O telefone deve ter no máximo 11 dígitos'
                } else {
                    newErrors.Chegada = ''
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


        const cleanCPF = formData.CPF.replace(/[^0-9]/g, '')
        if (cleanCPF.length > 11) {
            newErrors.CPF = 'O CPF deve ter no máximo 11 dígitos'
        }

        const cleanTelefone = formData.telefone.replace(/[^0-9]/g, '')
        if (cleanTelefone.length > 11) {
            newErrors.telefone = 'O telefone deve ter no máximo 11 dígitos'
        }


        setErrors(newErrors)

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



                        <div className='form-group'>
                        <label>Previsão de Chegada</label>
                        <input 
                        type="text"
                        name= 'Chegada' 
                        placeholder='00:00'
                        value={formData.Chegada}
                        onChange={handleInputChange}

                        />
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

                    <div className='form-group'>
                        <label >Como soube da Feira? *</label>
                        <select id="sabendoFeira" name="sabendo">
                            <option value="">Selecione...</option>
                            <option value="insta">Instagram</option>
                            <option value="face">Facebook</option>
                            <option value="familha">Amigos ou família</option>
                            <option value="outros">Outros...</option>
                            </select>
                    </div> 
                    <div className='form-group'>
                        <label >Interesse *</label>
                        <select id="interesse" name="interesse">
                            <option value="">Selecione...</option>
                            <option value="info">Informática</option>
                            <option value="CV">Comunicação Visual</option>
                            <option value="ADM">Admiministração</option>
                            <option value="mecanica">Eletromecânica</option>
                            <option value="eletrica">Automação Residencial</option>
                            <option value="ingles">Inglês</option>
                            <option value="conhecer">Conhecer o local</option>
                        </select>
                    </div> 

                    <div className='form-group'>
                        <label>Escolaridade *</label>
                        <select id="escolaridade" name="escolaridade">
                            <option value="">Selecione...</option>
                            <option value="fundamental">Ensino Fundamental</option>
                            <option value="medio">Ensino Médio</option>
                            <option value="superior">Ensino Superior</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>É ex aluno *</label>
                        <select id="exalun" name="ex aluno">
                            <option value="">Selecione...</option>
                            <option value="false">Não</option>
                            <option value="true">Sim</option>
                            
                        </select>
                    </div>

                    <button type='submit'>Cadastrar</button>

                </form>
            </div>
        </div>
    )
}