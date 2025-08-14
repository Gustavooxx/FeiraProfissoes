import './index.scss'
import { Link } from 'react-router-dom'

export default function Site() {
    return (
        <div className='container-principal'>
            {/* Seção Hero */}
            <section className="secao-hero">

                <div className="sobreposicao-hero"></div>

                <div className="conteudo-hero">

                    <div className="logo-hero">
                        <img src="/assets/images/logofrei.jpeg" alt="Instituto Nossa Senhora De Fátima" />
                    </div>

                    <h1 className="titulo-hero">
                        Instituto Nossa Senhora De Fátima
                    </h1>

                    <h2 className="subtitulo-hero">
                        ESFORÇO QUE TRANSFORMA, E O ORGULHO PERMANECE
                    </h2>

                    <p className="descricao-hero">
                        Seu Futuro Está Aqui
                    </p>

                    <div className="destaque-hero">
                        <span className="texto-destaque">5ª Feira De Profissões</span>
                    </div>
                    
                    <div className="botoes-hero">
                        <Link to="/Login" className="botao botao-primario">Entrar</Link>
                        <Link to="/Admin" className="botao botao-secundario">Área Admin</Link>
                    </div>
                </div>


            </section>

            {/* Sobre a seção */}
            <section className="secao-sobre">

                <div className="container">
                    <div className="cabecalho-secao">
                        <h2 className="titulo-secao">Sobre o Evento</h2>
                        <p className="subtitulo-secao">Descubra oportunidades que transformam vidas</p>
                    </div>

                    <div className="conteudo-sobre">
                        <div className="imagem-sobre">
                            <img src="/assets/images/localFrei2.jpeg" alt="Instituto Frei" />
                        </div>
                        <div className="texto-sobre">
                            <h3>História do Instituto</h3>
                            <p>
                                Fundado por Frei Ambrogio (conhecido como Frei Xavier) entre as décadas de 1960 e 1970,
                                o instituto nasceu como uma resposta às necessidades da comunidade de Veleiros, na zona sul de São Paulo.
                            </p>
                            <p>
                                Integrado à Paróquia de Nossa Senhora de Fátima, começou com uma creche em 1971 e,
                                em 1979, inaugurou a Escola Profissional Nossa Senhora de Fátima, com foco na formação técnica e profissional.
                            </p>

                            <div className="estatisticas">
                                <div className="item-estatistica">
                                    <span className="numero-estatistica">50+</span>
                                    <span className="rotulo-estatistica">Anos de História</span>
                                </div>
                                <div className="item-estatistica">
                                    <span className="numero-estatistica">1000+</span>
                                    <span className="rotulo-estatistica">Alunos Formados</span>
                                </div>
                                <div className="item-estatistica">
                                    <span className="numero-estatistica">5ª</span>
                                    <span className="rotulo-estatistica">Edição da Feira</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Recursos */}
            <section className="secao-recursos">
                <div className="container">
                    <div className="cabecalho-secao">
                        <h2 className="titulo-secao">O que Você Encontrará</h2>
                        <p className="subtitulo-secao">Explore diferentes áreas profissionais</p>
                    </div>

                    <div className="grade-recursos">
                        <div className="cartao-recurso">
                            <div className="icone-recurso">
                                <img src="/assets/images/iconescurso/iconeInformatica.svg" alt="iconeinformatica" />
                            </div>
                            <h3>Informática</h3>
                            <p>Tecnologia e inovação ao seu alcance</p>
                        </div>

                        <div className="cartao-recurso">
                            <div className="icone-recurso">
                            <img src="/assets/images/iconescurso/iconeeletrica.svg" alt="iconeinformatica" />
                            </div>
                            <h3>Eletrotécnica</h3>
                            <p>Energia e eletrônica moderna</p>
                        </div>

                        <div className="cartao-recurso">
                            <div className="icone-recurso">
                            <img src="/assets/images/iconescurso/iconemecanica.svg" alt="iconeinformatica"  />
                            </div>
                            <h3>Eletromecânica</h3>
                            <p>Mecânica e automação integradas</p>
                        </div>

                        <div className="cartao-recurso">
                            <div className="icone-recurso">
                            <img src="/assets/images/iconescurso/iconeingles.svg" alt="iconeinformatica"  />
                            </div>
                            <h3>Inglês</h3>
                            <p>Comunicação global e oportunidades</p>
                        </div>

                        <div className="cartao-recurso">
                            <div className="icone-recurso">
                            <img src="/assets/images/iconescurso/iconeadm.svg" alt="iconeinformatica"  />
                            </div>

                            <h3>Administração</h3>
                            <p>Gestão e empreendedorismo</p>
                        </div>

                        <div className="cartao-recurso">
                            <div className="icone-recurso">
                            <img src="/assets/images/iconescurso/iconecv.svg" alt="iconeinformatica"  />
                            </div>
                            <h3>Comunicacao Visual</h3>
                            <p>Design e comunicação eficazes</p>
                        </div>

                    </div>

                    
                </div>
            </section>


        </div>
    )
}
