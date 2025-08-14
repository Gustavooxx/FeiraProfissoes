import './index.scss'
import { Link } from 'react-router-dom'

export default function Site() {
    return (
        <div className='container-site'>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-logo">
                        <img src="/assets/images/logofrei.jpeg" alt="Instituto Nossa Senhora De Fátima" />
                    </div>
                    <h1 className="hero-title">
                        Instituto Nossa Senhora De Fátima
                    </h1>
                    <h2 className="hero-subtitle">
                        ESFORÇO QUE TRANSFORMA, E O ORGULHO PERMANECE
                    </h2>
                    <p className="hero-description">
                        Seu Futuro Está Aqui
                    </p>
                    <div className="hero-highlight">
                        <span className="highlight-text">5ª Feira De Profissões</span>
                    </div>
                    <div className="hero-buttons">
                        <Link to="/Login" className="btn btn-primary">Entrar</Link>
                        <Link to="/Admin" className="btn btn-secondary">Área Admin</Link>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Sobre o Evento</h2>
                        <p className="section-subtitle">Descubra oportunidades que transformam vidas</p>
                    </div>

                    <div className="about-content">
                        <div className="about-image">
                            <img src="/assets/images/localFrei2.jpeg" alt="Instituto Frei" />
                        </div>
                        <div className="about-text">
                            <h3>História do Instituto</h3>
                            <p>
                                Fundado por Frei Ambrogio (conhecido como Frei Xavier) entre as décadas de 1960 e 1970,
                                o instituto nasceu como uma resposta às necessidades da comunidade de Veleiros, na zona sul de São Paulo.
                            </p>
                            <p>
                                Integrado à Paróquia de Nossa Senhora de Fátima, começou com uma creche em 1971 e,
                                em 1979, inaugurou a Escola Profissional Nossa Senhora de Fátima, com foco na formação técnica e profissional.
                            </p>
                            <div className="stats">
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Anos de História</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">1000+</span>
                                    <span className="stat-label">Alunos Formados</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5ª</span>
                                    <span className="stat-label">Edição da Feira</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">O que Você Encontrará</h2>
                        <p className="section-subtitle">Explore diferentes áreas profissionais</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>💻</span>
                            </div>
                            <h3>Informática</h3>
                            <p>Tecnologia e inovação ao seu alcance</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>⚡</span>
                            </div>
                            <h3>Eletrotécnica</h3>
                            <p>Energia e eletrônica moderna</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>🔧</span>
                            </div>
                            <h3>Eletromecânica</h3>
                            <p>Mecânica e automação integradas</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>🌐</span>
                            </div>
                            <h3>Inglês</h3>
                            <p>Comunicação global e oportunidades</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>📊</span>
                            </div>
                            <h3>Administração</h3>
                            <p>Gestão e empreendedorismo</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Pronto para Transformar Seu Futuro?</h2>
                        <p>Junte-se a nós na 5ª Feira de Profissões e descubra oportunidades incríveis!</p>
                        <div className="cta-buttons">
                            <Link to="/Login" className="btn btn-cta-primary">Participar Agora</Link>
                            <a href="#about" className="btn btn-cta-secondary">Saiba Mais</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Instituto Nossa Senhora De Fátima. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}
