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
                            <Link to="/LoginConect" className="botao botao-secundario">Área Admin</Link>
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
                            <p>Automa</p>
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

            <section className="secao-programacao" data-aos="fade-up">
                <div className="container">
                    <div className="cabecalho-secao">
                        <h2 className="titulo-secao">Programação 5ª Feira de Profissões</h2>
                        <p className="subtitulo-secao">Explore todas as oportunidades e atividades disponíveis</p>
                    </div>

                    <div className="programacao-container">
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

            <footer className="footer-social">

                <div className="container">

                    <div className="social-icons">
                        <h3>Siga-nos nas redes sociais</h3>

                        <div className="icons-container">
                            <a href="https://www.instagram.com/institutonsfatima/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#de4384ff">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/institutonsfatima" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0452f8ff" >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.linkedin.com/company/institutonsfatima/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#3b5998">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://www.tiktok.com/@institutonsfatima_" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="000000ff">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                                <span>TikTok</span>
                            </a>

                            <a href="https://www.youtube.com/@institutosocialnossasenhor3548/videos" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff0606ff">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <span>YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
