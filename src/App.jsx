import './App.css'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <h1 className="logo"><img src="" alt="" /></h1>
          <ul className="menu">
            <li><a href="#sobre">Trailer</a></li>
            <li><a href="#servicos">Assistir</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="section hero">
        <div className="content">
          <h2>Bem-vindo à Minha Landing Page</h2>
          <p>Apresente seu produto ou serviço com estilo.</p>
          <a href="#sobre" className="btn">Saiba Mais</a>
        </div>
      </section>

      <section id="sobre" className="section">
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa dedicada a entregar resultados incríveis para nossos clientes.</p>
      </section>

      <section id="servicos" className="section">
        <h2>Nossos Serviços</h2>
        <div className="servicos-container">
          <div className="servico">
            <h3>Consultoria</h3>
            <p>Orientamos você para o sucesso do seu negócio.</p>
          </div>
          <div className="servico">
            <h3>Design</h3>
            <p>Criação de identidades visuais marcantes e modernas.</p>
          </div>
          <div className="servico">
            <h3>Desenvolvimento</h3>
            <p>Sites rápidos, responsivos e eficazes.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="section">
        <h2>Fale Conosco</h2>
        <p>Entre em contato e saiba como podemos ajudar!</p>
        <a href="mailto:contato@minhamarca.com" className="btn">Enviar Email</a>
      </section>

      <footer>
        <p>© 2025 MinhaMarca. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
