import './index.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';

export default function Site() {
    const [animateStats, setAnimateStats] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div className='container-principal'>

            <section className="secao-hero" >

                <div className="sobreposicao-hero"></div>

                <div className="conteudo-hero">

                    <div className='container-logo'>

                        <div className="logo-hero">
                            <img src="/assets/images/logofrei.jpeg" alt="Instituto Nossa Senhora De Fátima" />
                            <h1 className="titulo-hero">
                                Instituto Nossa Senhora De Fátima
                            </h1>
                        </div>

                        <div className="botoes-hero">
                            <Link to="/Login" className="botao botao-primario">Cadastre-se</Link>
                            <Link to="/Admin" className="botao botao-secundario">Área Admin</Link>
                        </div>

                    </div>

                    <div className='container-hero'>

                        <div className='textos'>

                            <h2 className="subtitulo-hero">
                                ESFORÇO QUE TRANSFORMA, E O ORGULHO PERMANECE
                            </h2>

                            <p className="descricao-hero">
                                Seu Futuro Está Aqui
                            </p>

                            <div className="destaque-hero">
                                <span className="texto-destaque">5ª Feira de Profissões</span>
                            </div>

                        </div>


                        <div className='imagem-xavier'>
                            <img src="/assets/images/fotofrei.jpg" alt="" width='100px' />
                        </div>

                    </div>

                </div>


            </section>

            {/* Sobre a seção */}
            <section className="secao-sobre" data-aos="fade-up" >

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
                                    <span className="numero-estatistica">50.000+</span>
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

            <section className="secao-recursos" data-aos="fade-up">
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

            {/* Seção de Programação da Feira */}
            <section className="secao-programacao" data-aos="fade-up">
                <div className="container">
                    <div className="cabecalho-secao">
                        <h2 className="titulo-secao">Programação 5ª Feira de Profissões</h2>
                        <p className="subtitulo-secao">Explore todas as oportunidades e atividades disponíveis</p>
                    </div>

                    <div className="programacao-container">
                        {/* PÁTIO */}
                        <div className="programa-card">
                            <div className="programa-header">
                                <h3> PÁTIO</h3>
                                <span className="programa-subtitulo">Estandes e Empresas</span>
                            </div>
                            
                            <div className="programa-content">
                                
                                <div className="empresas-destaque">
                                    <h4>Empresas Convidadas:</h4>
                                    <div className="empresas-grid">

                                        <div className="empresa-item">
                                            <img src="/assets/images/casadamulher.png" alt="casadamulher" />
                                        </div>

                                        <div className="empresa-item">
                                            <img src="/assets/images/oticascarol.png" alt="Óticas Carol" />
                                        </div>

                                        <div className="empresa-item">
                                            <img src="/assets/images/STB.jpg" alt="STB" />
                                        </div>

                                                                                                            <div
                                        className="empresa-item">
                                            <img src="/assets/images/conexaobemmaior.png" alt="STB" />
                                        </div>
          
                                    </div>

                                </div>

                                <div className="stands-list">
                                    <h4>Estandes e Atividades:</h4>
                                    <ul>
                                        <li><strong>CEDESP AVE MARIA:</strong> Metalmecânica e Tecnologia</li>
                                        <li><strong>Troca de Livros:</strong> Compartilhe conhecimento</li>
                                        <li><strong>Oficinas Técnicas:</strong> Eletromecânica, Auto Elétrica, Eletrotécnica</li>
                                        <li><strong>Livros do Frei:</strong> Literatura e cultura</li>
                                        <li><strong>Padaria do Frei:</strong> Doces e salgados artesanais</li>
                                        <li><strong>Pastel & Bebidas:</strong> Embaixo da escada</li>
                                    </ul>
                                </div>

                                <div className="salas-patio">
                                    <h4>Salas Disponíveis:</h4>
                                    <div className="salas-grid">
                                        <div className="sala-item">
                                            <span className="sala-numero">SALA 4</span>
                                            <span className="sala-atividade">Óticas Carol</span>
                                        </div>
                                        <div className="sala-item">
                                            <span className="sala-numero">SALA 5</span>
                                            <span className="sala-atividade">Caixa</span>
                                        </div>
                                        <div className="sala-item">
                                            <span className="sala-numero">SALA 6</span>
                                            <span className="sala-atividade">Inglês</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 1° ANDAR */}
                        <div className="programa-card">
                            <div className="programa-header">
                                <h3> 1° ANDAR</h3>
                                <span className="programa-subtitulo">Administração & Negócios</span>
                            </div>
                            <div className="programa-content">
                                <div className="salas-andar">
                                    <div className="sala-detalhe">
                                        <span className="sala-numero">SALA 18</span>
                                        <span className="sala-descricao">ADMINISTRAÇÃO: Empreendedorismo e Logística</span>
                                    </div>
                                    <div className="sala-detalhe">
                                        <span className="sala-numero">SALA 19</span>
                                        <span className="sala-descricao">CREAS</span>
                                    </div>
                                    <div className="sala-detalhe">
                                        <span className="sala-numero">SALA 20</span>
                                        <span className="sala-descricao">ADMINISTRAÇÃO: RH, Contabilidade e Documentos Técnicos</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2° ANDAR */}
                        <div className="programa-card">
                            <div className="programa-header">
                                <h3> 2° ANDAR</h3>
                                <span className="programa-subtitulo">Tecnologia & Criatividade</span>
                            </div>
                            <div className="programa-content">
                                <div className="salas-andar">
                                    <div className="sala-detalhe">
                                        <span className="sala-numero">SALA 24</span>
                                        <span className="sala-descricao">Comunicação Visual: Corel Draw, Photoshop e Caricaturas</span>
                                    </div>
                                    <div className="sala-detalhe">
                                        <span className="sala-numero">SALA 25</span>
                                        <span className="sala-descricao">Informática: Montagem, Configuração e Redes</span>
                                    </div>
                                    <div className="sala-detalhe">
                                        <span className="sala-numero">SALA 26</span>
                                        <span className="sala-descricao">Informática: Programação</span>
                                    </div>
                                    <div className="sala-detalhe">
                                        <span className="sala-numero">SALA 27</span>
                                        <span className="sala-descricao">Elaboração de Currículo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3° ANDAR */}
                        <div className="programa-card">
                            <div className="programa-header">
                                <h3> 3° ANDAR</h3>
                                <span className="programa-subtitulo">Auditorio - Desenvolvimento Profissional</span>
                            </div>
                            <div className="programa-content">
                                <div className="auditorio-atividades">
                                    <div className="atividade-item">
                                        <span className="atividade-icone"></span>
                                        <span className="atividade-texto">Simulação de Entrevista de Emprego</span>
                                    </div>
                                    <div className="atividade-item">
                                        <span className="atividade-icone"></span>
                                        <span className="atividade-texto">Oficina de LinkedIn</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
