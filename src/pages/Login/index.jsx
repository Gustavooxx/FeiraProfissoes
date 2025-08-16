import './index.scss'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className="container">
                <form>
                    <h1>Cadastro de Usuário</h1>

                    <div className="form-group">
                        <label>Nome Completo *</label>
                        <input 
                            type="text" 
                            name="nome" 
                            placeholder="Digite seu nome completo" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Email *</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="seu@email.com" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Senha *</label>
                        <input 
                            type="password" 
                            name="senha" 
                            placeholder="Digite sua senha" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Telefone *</label>
                        <input 
                            type="tel" 
                            name="telefone" 
                            placeholder="(00) 00000-0000" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Data de Nascimento *</label>
                        <input 
                            type="date" 
                            name="data_nascimento" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Endereço Completo *</label>
                        <input 
                            type="text" 
                            name="endereco" 
                            placeholder="Rua, número, bairro, cidade - UF" 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CEP *</label>
                        <input 
                            type="text" 
                            name="cep" 
                            placeholder="00000-000" 
                            required 
                        />
                    </div>

                    <button type='submit'>Cadastrar</button>

                </form>
            </div>
        </div>
    )
}
