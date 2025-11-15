import './App.css'
import { useEffect } from "react";
import logo from "./assets/opp-logo.png";


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
          <ul className="menu">
            <li><a href="https://www.youtube.com/watch?v=F3OxA9Cz17A">Trailer</a></li>
          </ul>
          <ul className="menu">
            <li><a href="https://www.netflix.com/br/title/81602830?source=35&fromWatch=true">Veja o Filme</a></li>
          </ul>
        </nav>
      </header>

      {/* --- ÚNICA TELA --- */}
      <section id="hero" className="section hero">
        <div className="content">
          <h2><img src={logo} alt="Logo " style={{ width: "450px", height: "auto" }}/></h2>
          <p>Clique no botão abaixo para mais sobre o filme.</p>
          <a href="#" className="btn">Saiba Mais</a>
        </div>
      </section>
    </div>
  );
}

export default App;