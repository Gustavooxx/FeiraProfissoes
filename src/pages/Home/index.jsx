import './index.scss'

import {Link} from 'react-router-dom'

export default function Site() {
    return (

        <div className='container-site'>

            <div className="topoPage">

                <div className="logofrei">
                    <img src="/assets/images/logofrei.jpeg"  />

                    <h1>Instituto Nossa Senhora De Fátima</h1>
                </div>


                <div className="tituloPrincipal">
                </div>

                 <div className="areaRegistro">

                        <Link >Login</Link>
                        <Link id='admin'>Administrador</Link>
                        
                 </div>


            </div>

            <div className='descricoes'>

                <div className='texto'>

                    <h2>O FUTURO ESTÁ AQUI</h2>

                    <h3>5 Feira De <br />Profissões </h3>

                    <Link>Cadastre-se Agora</Link>

                    <div className='projetos'>

                        <div className='center'>

                            <div className='images'>
                                <img src="/assets/images/imagemFrei.png" alt="" />
                            </div>

                            <div className='texto'>

                            <p>participe de nossos projetos aqui esta alguns do nossos projetos na feira passada</p>

                            </div>
                            
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}