import './index.scss'
import { Link } from 'react-router'
export default function LoginConnect() {

    return (
        <div className='login-connect'>
            <section className='container-connect'>
                <h2>Digite o código</h2>
                <div className='group'>
                    <label>Código de Acesso*</label>
                    <input 
                        type="text"
                        name="codigo"
                        placeholder="Digite seu código de acesso"
                        required 
                    />
                </div>

                <Link to='/admin'>
                <button type="submit" className='connect-button'>
                   Conectar 
                </button>
                </Link>
            </section>
        </div>
    )
}
