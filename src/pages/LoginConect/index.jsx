import './index.scss'

export default function LoginConnect() {

    return (
        <div className='login-connect'>
            <section className='container-connect'>
                <h2>Acesso Conectado</h2>
                <div className='group'>
                    <label>Código de Acesso*</label>
                    <input 
                        type="text"
                        name="codigo"
                        placeholder="Digite seu código de acesso"
                        required 
                    />
                </div>
                <button type="submit" className='connect-button'>
                    Conectar
                </button>
            </section>
        </div>
    )
}
