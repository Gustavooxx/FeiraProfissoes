import { useState } from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

export default function LoginConnect() {
    const [senha,setSenha] = useState('');
    const [mensagem,setMensagem] = useState('');
const navigate = useNavigate();


   async function verificar(){
       
       try {
        const resposta = await axios.post('http://localhost:5010/senha', 
           {
               senha:senha
           }
        );
   
        setMensagem( resposta.data.mensagem);

        if(resposta.data.mensagem === 'Acesso Confirmado!!'){
            navigate('/admin')
        }
        
        
        
    } 
    catch (error) {
        console.error(error);

        setMensagem('Erro ao verificar senha');
        
    }
   }
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
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        
                    />
                </div>

               
                <button  className='connect-button' onClick={verificar}>
                   Conectar 
                </button>
               
                {mensagem && <p className='mensagem'>{mensagem}</p>}
            </section>
        </div>
    )
}
