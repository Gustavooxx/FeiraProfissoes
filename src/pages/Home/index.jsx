import './index.scss'

import { Link } from 'react-router-dom'

export default function Site() {
    return (

        <div className='container-site'>

            <div className="topoPage">

                <div className="logofrei">
                    <img src="/assets/images/logofrei.jpeg" />

                    <h1>Instituto Nossa Senhora De Fátima</h1>
                </div>


                <div className="tituloPrincipal">
                </div>

                <div className="areaRegistro">

<<<<<<< HEAD
                    <Link id='publico' >Login</Link>
                    <Link id='admin'>Administrador</Link>

                </div>
=======
                        <Link to='/Login' >Login</Link>
                        <Link id='admin'>Área Admin</Link>
                        
                 </div>
>>>>>>> 8ee8b1631170700eb8c9d2896ea1dd242842e4bc

            </div>

            <div className='descricoes'>

                <div className='texto'>

                    <h2>ESFORÇO QUE TRANSFORMA E O ORGULHO PERMANECE</h2>

                    <h3>5 Feira De Profissões </h3>

                    <Link to='/Login'>Cadastre-se Agora</Link>


                    <div className='projetos'>

<<<<<<< HEAD
=======
                        <div className='center'>

                            <div className='images'>
                                <img src="/assets/images/imagemFrei.png" alt="" />
                            </div>

                            <div className='freiXavier'>
                                <div className='img-localIntituto'>
                                    <img src="/assets/images/localFrei.png" width='400px' height='300px'/>

                                </div>
                                <div className=' titulos'>

                                  

                                </div>
                                
                                <p></p>
                            </div>

                            
                            
                        </div>
>>>>>>> 8ee8b1631170700eb8c9d2896ea1dd242842e4bc

                    </div>

                </div>

            </div>

            <div className="imgsAlunos">
                <img src="/public/assets/images/alunosfrei/alunos1.jpeg" />
            </div>


            <div className="apresentacao">

                <div className="titulo">
                    <h1>Quem somos nós?</h1>
                </div>

                <div className="texto">
                    <p>Fundado por Frei Ambrogio (conhecido como Frei Xavier) entre as décadas de 1960 e 1970, o instituto nasceu como uma resposta às necessidades da comunidade de Veleiros, na zona sul de São Paulo. Integrado à Paróquia de Nossa Senhora de Fátima, começou com uma creche em 1971 e, em 1979, inaugurou a Escola Profissional Nossa Senhora de Fátima, com foco na formação técnica e profissional de jovens e adolescentes carentes da região .</p>
                </div>
            </div>

        </div>



    )
}