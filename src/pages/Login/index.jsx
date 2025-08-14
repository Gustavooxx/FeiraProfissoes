import './index.scss'
import { Link } from 'react-router-dom'

export default function Login() {
    return (


        <div>

            <div className="container">

                <form >

                    <h1>Nome</h1>

                    <div className="inputs">
                        <input placeholder="Email" type='email' />
                    </div>
                    <div className="inp">
                        <input placeholder="Sua senha" type='password' />
                    </div>

                    <div className='Lembrarsenha'>

                        <label>
                            <input type="checkbox" />
                            Lembrar minha senha
                        </label>
                        <a href="#">Esqueci a minha senha</a>

                    </div>

                    <button type='submit'>Login</button>

                    <div className='Cadastrar'>
                        <p>Não tem cadastro? <a href="#">Cadastre-se</a></p>
                    </div>
                </form>


            </div>

        </div>


    )
}