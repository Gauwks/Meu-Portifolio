import "./home.css";
import RedesSociais from "../../Redes/redes.jsx";
import foto from "../../../assets/foto/foto.jpg"

function Home() {
  return (
    <div className="home-container">
      <div className="home-texto">
        <span>Olá, eu sou</span>
        <h1>Maria Clara</h1>
        <p>Engenheira de Software em formação | Foco em Aplicações Web e Mobile</p>
        <button>Meu currículo</button>
        <RedesSociais />
      </div>

      <img src={foto} alt="Foto de perfil de Maria Clara" className="home-foto" />
    </div>
  );
}

export default Home;