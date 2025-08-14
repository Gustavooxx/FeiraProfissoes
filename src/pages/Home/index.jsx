import './index.scss'

import { Link } from 'react-router-dom'

export default function Site() {

     function clicou() {
        alert('Clicou')
    }

    return (

        <div className='container-site'>

            <div className="topoPage">

                <div className="logofrei">
                    <img src="/assets/images/logofrei.jpeg" />

                    <h1>Instituto Nossa Senhora De Fátima</h1>
                </div>


                <div className="areaRegistro">

                    <Link id='publico' onClick={clicou} to='/Login'>Login</Link>
                    <Link id='admin' to='/Admin'>Area Admin</Link>

                </div>

            </div>

            <div className='descricoes'>

                <div className='texto'>

                    <h2>ESFORÇO QUE TRANSFORMA, E O ORGULHO PERMANECE</h2>
                    <h4>Seu Futuro Está Aqui</h4>
                    <h3>5ª Feira De Profissões </h3>

                </div>

            </div>

            <div className='projetos'>

                <div className='center'>

                    <div className='texto-imagem'>

                        <img src="/assets/images/localFrei2.jpeg"  />

                        <p>Fundado por Frei Ambrogio (conhecido como Frei Xavier) entre as décadas de 1960 e 1970, o instituto nasceu como uma resposta às necessidades da comunidade de Veleiros, na zona sul de São Paulo. Integrado à Paróquia de Nossa Senhora de Fátima, começou com uma creche em 1971 e, em 1979, inaugurou a Escola Profissional Nossa Senhora de Fátima, com foco na formação técnica e profissional de jovens e adolescentes carentes da região. O Instituto Social Nossa Senhora de Fátima tem a alegria de anunciar a 5ª edição da nossa tradicional Feira de Profissões, um evento pensado para inspirar, orientar e abrir caminhos para jovens e adultos que desejam descobrir novas possibilidades para sua carreira e futuro. <br />
                        <br />
                        Este ano, reuniremos diversas áreas do conhecimento e do mercado de trabalho, com destaque para cursos e formações em Informática, Eletrotécnica, Eletromecânica, Inglês e Administração. Além disso, teremos palestras, demonstrações práticas e a presença de profissionais experientes prontos para compartilhar vivências e dicas valiosas.
                        Você é nosso convidado especial para embarcar nessa jornada de conhecimento e oportunidades!
                        <br />
                        <br />
                        Venha conhecer de perto profissões, tirar dúvidas, conversar com especialistas e descobrir o próximo passo para transformar seu futuro.

                        Traga seus amigos e familiares, participe das atividades e inscreva-se para aproveitar ao máximo tudo o que a feira tem a oferecer.</p>

                    </div>

                </div>

            </div>

            <div className='container-icones'>

                <div className='icones'>
                    <img src="" alt="" />
                </div>
            </div>


        </div>


    )
}

